/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  DatadogMonitorResource,
  MonitorsCreateOptionalParams,
  MicrosoftDatadogClient
} from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a monitor resource.
 *
 * @summary Create a monitor resource.
 * x-ms-original-file: specification/datadog/resource-manager/Microsoft.Datadog/stable/2023-01-01/examples/Monitors_Create.json
 */
async function monitorsCreate(): Promise<void> {
  const subscriptionId =
    process.env["DATADOG_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DATADOG_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const body: DatadogMonitorResource = {
    name: "myMonitor",
    location: "West US",
    properties: {
      datadogOrganizationProperties: {
        name: "myOrg",
        cspm: false,
        enterpriseAppId: "00000000-0000-0000-0000-000000000000",
        id: "myOrg123",
        linkingAuthCode: "someAuthCode",
        linkingClientId: "00000000-0000-0000-0000-000000000000"
      },
      monitoringStatus: "Enabled",
      userInfo: {
        name: "Alice",
        emailAddress: "alice@microsoft.com",
        phoneNumber: "123-456-7890"
      }
    },
    sku: { name: "free_Monthly" },
    tags: { environment: "Dev" }
  };
  const options: MonitorsCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftDatadogClient(credential, subscriptionId);
  const result = await client.monitors.beginCreateAndWait(
    resourceGroupName,
    monitorName,
    options
  );
  console.log(result);
}

async function main(): Promise<void> {
  monitorsCreate();
}

main().catch(console.error);
