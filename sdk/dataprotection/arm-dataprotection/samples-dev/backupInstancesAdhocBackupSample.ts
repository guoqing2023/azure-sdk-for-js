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
  TriggerBackupRequest,
  DataProtectionClient,
} from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Trigger adhoc backup
 *
 * @summary Trigger adhoc backup
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2024-04-01/examples/BackupInstanceOperations/TriggerBackup.json
 */
async function triggerAdhocBackup(): Promise<void> {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "000pikumar";
  const vaultName = "PratikPrivatePreviewVault1";
  const backupInstanceName = "testInstance1";
  const parameters: TriggerBackupRequest = {
    backupRuleOptions: {
      ruleName: "BackupWeekly",
      triggerOption: { retentionTagOverride: "yearly" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.backupInstances.beginAdhocBackupAndWait(
    resourceGroupName,
    vaultName,
    backupInstanceName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  triggerAdhocBackup();
}

main().catch(console.error);
