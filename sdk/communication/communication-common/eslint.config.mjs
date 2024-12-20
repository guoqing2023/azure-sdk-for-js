import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default azsdkEslint.config([
  {
    rules: {
      "@azure/azure-sdk/ts-naming-options": "off",
      // "@azure/azure-sdk/ts-config-declaration": "off",
      // "@azure/azure-sdk/ts-config-allowsyntheticdefaultimports": "off",
      // "@azure/azure-sdk/ts-config-esmoduleinterop": "off",
      // "@azure/azure-sdk/ts-config-forceconsistentcasinginfilenames": "off",
      // "@azure/azure-sdk/ts-config-importhelpers": "off",
      // "@azure/azure-sdk/ts-config-module": "off",
      // "@azure/azure-sdk/ts-config-moduleresolution": "off",
      // "@azure/azure-sdk/ts-config-sourcemap": "off",
      // "@azure/azure-sdk/ts-config-strict": "off",
      // "@azure/azure-sdk/ts-config-target": "off",
      // "@azure/azure-sdk/ts-config-lib": "off"
    },
  },
]);
