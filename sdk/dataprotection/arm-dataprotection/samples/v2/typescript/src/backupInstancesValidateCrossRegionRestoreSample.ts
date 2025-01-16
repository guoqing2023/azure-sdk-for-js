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
  ValidateCrossRegionRestoreRequestObject,
  DataProtectionClient,
} from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Validates whether Cross Region Restore can be triggered for DataSource.
 *
 * @summary Validates whether Cross Region Restore can be triggered for DataSource.
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2024-04-01/examples/CrossRegionRestore/ValidateCrossRegionRestore.json
 */
async function validateCrossRegionRestore() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "000pikumar";
  const location = "EastAsia";
  const parameters: ValidateCrossRegionRestoreRequestObject = {
    crossRegionRestoreDetails: {
      sourceBackupInstanceId:
        "/subscriptions/04cf684a-d41f-4550-9f70-7708a3a2283b/resourceGroups/000pikumar/providers/Microsoft.DataProtection/backupVaults/PratikPrivatePreviewVault1/BackupInstances/harshitbi1",
      sourceRegion: "east asia",
    },
    restoreRequestObject: {
      objectType: "AzureBackupRecoveryPointBasedRestoreRequest",
      recoveryPointId: "hardcodedRP",
      restoreTargetInfo: {
        datasourceAuthCredentials: {
          objectType: "SecretStoreBasedAuthCredentials",
          secretStoreResource: {
            secretStoreType: "AzureKeyVault",
            uri: "https://samplevault.vault.azure.net/secrets/credentials",
          },
        },
        datasourceInfo: {
          datasourceType: "Microsoft.DBforPostgreSQL/servers/databases",
          objectType: "Datasource",
          resourceID:
            "/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest/databases/targetdb",
          resourceLocation: "",
          resourceName: "targetdb",
          resourceType: "Microsoft.DBforPostgreSQL/servers/databases",
          resourceUri: "",
        },
        datasourceSetInfo: {
          datasourceType: "Microsoft.DBforPostgreSQL/servers/databases",
          objectType: "DatasourceSet",
          resourceID:
            "/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest",
          resourceLocation: "",
          resourceName: "viveksipgtest",
          resourceType: "Microsoft.DBforPostgreSQL/servers",
          resourceUri: "",
        },
        objectType: "RestoreTargetInfo",
        recoveryOption: "FailIfExists",
        restoreLocation: "southeastasia",
      },
      sourceDataStoreType: "VaultStore",
      sourceResourceId:
        "/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest/databases/testdb",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result =
    await client.backupInstances.beginValidateCrossRegionRestoreAndWait(
      resourceGroupName,
      location,
      parameters,
    );
  console.log(result);
}

async function main() {
  validateCrossRegionRestore();
}

main().catch(console.error);
