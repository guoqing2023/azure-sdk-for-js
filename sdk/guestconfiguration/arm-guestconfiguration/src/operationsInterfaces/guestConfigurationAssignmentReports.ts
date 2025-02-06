/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  GuestConfigurationAssignmentReportsListOptionalParams,
  GuestConfigurationAssignmentReportsListResponse,
  GuestConfigurationAssignmentReportsGetOptionalParams,
  GuestConfigurationAssignmentReportsGetResponse,
} from "../models/index.js";

/** Interface representing a GuestConfigurationAssignmentReports. */
export interface GuestConfigurationAssignmentReports {
  /**
   * List all reports for the guest configuration assignment, latest report first.
   * @param resourceGroupName The resource group name.
   * @param guestConfigurationAssignmentName The guest configuration assignment name.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    guestConfigurationAssignmentName: string,
    vmName: string,
    options?: GuestConfigurationAssignmentReportsListOptionalParams,
  ): Promise<GuestConfigurationAssignmentReportsListResponse>;
  /**
   * Get a report for the guest configuration assignment, by reportId.
   * @param resourceGroupName The resource group name.
   * @param guestConfigurationAssignmentName The guest configuration assignment name.
   * @param reportId The GUID for the guest configuration assignment report.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    guestConfigurationAssignmentName: string,
    reportId: string,
    vmName: string,
    options?: GuestConfigurationAssignmentReportsGetOptionalParams,
  ): Promise<GuestConfigurationAssignmentReportsGetResponse>;
}
