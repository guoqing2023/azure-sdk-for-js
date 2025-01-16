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
  DatasetResource,
  DataFactoryManagementClient,
} from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a dataset.
 *
 * @summary Creates or updates a dataset.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/Datasets_Create.json
 */
async function datasetsCreate() {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName =
    process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const datasetName = "exampleDataset";
  const dataset: DatasetResource = {
    properties: {
      type: "AzureBlob",
      format: { type: "TextFormat" },
      fileName: { type: "Expression", value: "@dataset().MyFileName" },
      folderPath: { type: "Expression", value: "@dataset().MyFolderPath" },
      linkedServiceName: {
        type: "LinkedServiceReference",
        referenceName: "exampleLinkedService",
      },
      parameters: {
        myFileName: { type: "String" },
        myFolderPath: { type: "String" },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.datasets.createOrUpdate(
    resourceGroupName,
    factoryName,
    datasetName,
    dataset,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a dataset.
 *
 * @summary Creates or updates a dataset.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/Datasets_Update.json
 */
async function datasetsUpdate() {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName =
    process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const datasetName = "exampleDataset";
  const dataset: DatasetResource = {
    properties: {
      type: "AzureBlob",
      format: { type: "TextFormat" },
      description: "Example description",
      fileName: { type: "Expression", value: "@dataset().MyFileName" },
      folderPath: { type: "Expression", value: "@dataset().MyFolderPath" },
      linkedServiceName: {
        type: "LinkedServiceReference",
        referenceName: "exampleLinkedService",
      },
      parameters: {
        myFileName: { type: "String" },
        myFolderPath: { type: "String" },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.datasets.createOrUpdate(
    resourceGroupName,
    factoryName,
    datasetName,
    dataset,
  );
  console.log(result);
}

async function main() {
  datasetsCreate();
  datasetsUpdate();
}

main().catch(console.error);
