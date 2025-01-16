/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Locations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DataLakeAnalyticsAccountManagementClient } from "../dataLakeAnalyticsAccountManagementClient.js";
import {
  LocationsGetCapabilityOptionalParams,
  LocationsGetCapabilityResponse
} from "../models/index.js";

/** Class containing Locations operations. */
export class LocationsImpl implements Locations {
  private readonly client: DataLakeAnalyticsAccountManagementClient;

  /**
   * Initialize a new instance of the class Locations class.
   * @param client Reference to the service client
   */
  constructor(client: DataLakeAnalyticsAccountManagementClient) {
    this.client = client;
  }

  /**
   * Gets subscription-level properties and limits for Data Lake Analytics specified by resource
   * location.
   * @param location The resource location without whitespace.
   * @param options The options parameters.
   */
  getCapability(
    location: string,
    options?: LocationsGetCapabilityOptionalParams
  ): Promise<LocationsGetCapabilityResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      getCapabilityOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getCapabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DataLakeAnalytics/locations/{location}/capability",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapabilityInformation
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
