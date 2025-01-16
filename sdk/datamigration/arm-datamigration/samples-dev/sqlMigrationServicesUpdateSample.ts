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
  SqlMigrationServiceUpdate,
  DataMigrationManagementClient
} from "@azure/arm-datamigration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update SQL Migration Service.
 *
 * @summary Update SQL Migration Service.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/UpdateMigrationService.json
 */
async function updateSqlMigrationService(): Promise<void> {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlMigrationServiceName = "testagent";
  const parameters: SqlMigrationServiceUpdate = { tags: { mytag: "myval" } };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.sqlMigrationServices.beginUpdateAndWait(
    resourceGroupName,
    sqlMigrationServiceName,
    parameters
  );
  console.log(result);
}

updateSqlMigrationService().catch(console.error);
