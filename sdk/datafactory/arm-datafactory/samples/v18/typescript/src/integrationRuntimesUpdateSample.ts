/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  UpdateIntegrationRuntimeRequest,
  DataFactoryManagementClient,
} from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates an integration runtime.
 *
 * @summary Updates an integration runtime.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/IntegrationRuntimes_Update.json
 */
async function integrationRuntimesUpdate() {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName =
    process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const integrationRuntimeName = "exampleIntegrationRuntime";
  const updateIntegrationRuntimeRequest: UpdateIntegrationRuntimeRequest = {
    autoUpdate: "Off",
    updateDelayOffset: '"PT3H"',
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.integrationRuntimes.update(
    resourceGroupName,
    factoryName,
    integrationRuntimeName,
    updateIntegrationRuntimeRequest,
  );
  console.log(result);
}

async function main() {
  integrationRuntimesUpdate();
}

main().catch(console.error);
