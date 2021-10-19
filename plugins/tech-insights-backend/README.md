# Tech Insights Backend

This is the backend for the default Backstage Tech Insights feature.
This provides the API for the frontend tech insights, scorecards and fact visualization functionality,
as well as a framework to run fact retrievers and store fact values in to a data store.

## Installation

### Install the package

```bash
# From your Backstage root directory
cd packages/backend
yarn add @backstage/plugin-tech-insights-backend
```

### Adding the plugin to your `packages/backend`

You'll need to add the plugin to the router in your `backend` package. You can
do this by creating a file called `packages/backend/src/plugins/techInsights.ts`. An example content for `techInsights.ts` could be something like this.

```ts
import {
  createRouter,
  DefaultTechInsightsBuilder,
} from '@backstage/plugin-tech-insights-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin({
  logger,
  config,
  discovery,
  database,
}: PluginEnvironment): Promise<Router> {
  const builder = new DefaultTechInsightsBuilder({
    logger,
    config,
    database,
    discovery,
    factRetrievers: [], // Fact retrievers registrations you want tech insights to use
  });

  return await createRouter({
    ...(await builder.build()),
    logger,
    config,
  });
}
```

With the `techInsights.ts` router setup in place, add the router to
`packages/backend/src/index.ts`:

```diff
+import techInsights from './plugins/techInsights';

async function main() {
  ...
  const createEnv = makeCreateEnv(config);

  const catalogEnv = useHotMemoize(module, () => createEnv('catalog'));
+  const techInsightsEnv = useHotMemoize(module, () => createEnv('tech_insights'));

  const apiRouter = Router();
+  apiRouter.use('/tech-insights', await techInsights(techInsightsEnv));
  ...
  apiRouter.use(notFoundHandler());

```

### Adding fact retrievers

At this point the Tech Insights backend is installed in your backend package, but
you will not have any fact retrievers present in your application. To have the FactRetrieverEngine implemented within this package to be able to retrieve and store fact data into the database, you need to add these.

To create factRetrieverRegistration you need to implement `FactRetriever` interface defined in `@backstage/plugin-tech-insights-common` package. After you have implemented this interface you can wrap that into a registration object like follows:

```ts
const myFactRetriever: FactRetriever = {
  /**
   * snip
   */
};

const myFactRetrieverRegistration = {
  cadence: '1 * 3 * * ', // On the first minute of the third day of the month
  factRetriever: myFactRetriever,
};
```

Then you can modify the example `techInsights.ts` file shown above like this:

```diff
const builder = new DefaultTechInsightsBuilder({
logger,
config,
database,
discovery,
- factRetrievers: [],
+ factRetrievers: [myFactRetrieverRegistration],
});
```

### Adding a fact checker

This module comes with a possibility to additionally add a fact checker and expose fact checking endpoints from the API. To be able to enable this feature you need to add a FactCheckerFactory implementation to be part of the `DefaultTechInsightsBuilder` constructor options.

There is a default FactChecker implementation provided in a module `@backstage/plugin-tech-insights-backend-module-jsonfc`. This implementation uses `json-rules-engine` as the underlying functionality to run checks. If you want to implement your own FactChecker for example to be able to handle other than `boolean` result types, you can do so by implementing `FactCheckerFactory` and `FactChecker` interfaces from `@backstage/plugin-tech-insights-common` package.

To add the default FactChecker into your Tech Insights you need to install the module into your backend application:

```bash
# From your Backstage root directory
cd packages/backend
yarn add @backstage/plugin-tech-insights-backend-module-jsonfc
```

and modify the `techInsights.ts` file to contain a reference to the FactCheckers implementation.

```diff
+ import { JsonRulesEngineFactCheckerFactory } from '@backstage/plugin-tech-insights-backend-module-jsonfc';

+ const myFactCheckerFactory = new JsonRulesEngineFactCheckerFactory({
+    checks: [],
+    logger,
+  }),

const builder = new DefaultTechInsightsBuilder({
logger,
config,
database,
discovery,
factRetrievers: [myFactRetrieverRegistration],
+ factCheckerFactory: myFactCheckerFactory
});
```

To be able to run checks, you need to additionally add individual checks into your FactChecker implementation. For examples how to add these, you can check the documentation of the individual implementation of the FactChecker

#### Modifying check persistence

The default FactChecker implementation comes with an in-memory storage to store checks. You can inject an additional data store by adding an implementation of `TechInsightCheckRegistry` into the constructor options when creating a `JsonRulesEngineFactCheckerFactory`. That can be done as follows

```diff
const myTechInsightCheckRegistry: TechInsightCheckRegistry<MyCheckType> = // snip
const myFactCheckerFactory = new JsonRulesEngineFactCheckerFactory({
  checks: [],
  logger,
+ checkRegistry: myTechInsightCheckRegistry
}),

```
