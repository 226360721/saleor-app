import { TransactionModel } from "avatax/lib/models/TransactionModel";

export const orderConfirmedTransactionMock = {
  id: 85026453274669,
  code: "31fa9e94-e8df-429b-b303-549e7bc10f1e",
  companyId: 7799660,
  date: "2023-05-25",
  status: "Saved",
  type: "SalesInvoice",
  batchCode: "",
  currencyCode: "USD",
  exchangeRateCurrencyCode: "USD",
  customerUsageType: "",
  entityUseCode: "",
  customerVendorCode: "VXNlcjoyMDg0NTEwNDEw",
  customerCode: "VXNlcjoyMDg0NTEwNDEw",
  exemptNo: "",
  reconciled: false,
  locationCode: "",
  reportingLocationCode: "",
  purchaseOrderNo: "",
  referenceCode: "",
  salespersonCode: "",
  taxOverrideType: "None",
  taxOverrideAmount: 0,
  taxOverrideReason: "",
  totalAmount: 137.34,
  totalExempt: 0,
  totalDiscount: 0,
  totalTax: 11.83,
  totalTaxable: 137.34,
  totalTaxCalculated: 11.83,
  adjustmentReason: "NotAdjusted",
  adjustmentDescription: "",
  locked: false,
  region: "CA",
  country: "US",
  version: 1,
  softwareVersion: "23.4.0.0",
  originAddressId: 85026453274671,
  destinationAddressId: 85026453274670,
  exchangeRateEffectiveDate: "2023-05-25",
  exchangeRate: 1,
  description: "",
  email: "happy.customer@saleor.io",
  businessIdentificationNo: "",
  modifiedDate: "2023-05-25T11:11:17.5517302Z",
  modifiedUserId: 6479978,
  taxDate: "2023-05-25",
  lines: [
    {
      id: 85026453274675,
      transactionId: 85026453274669,
      lineNumber: "1",
      boundaryOverrideId: 0,
      customerUsageType: "",
      entityUseCode: "",
      description: "Monospace Tee",
      destinationAddressId: 85026453274670,
      originAddressId: 85026453274671,
      discountAmount: 0,
      discountTypeId: 0,
      exemptAmount: 0,
      exemptCertId: 0,
      exemptNo: "",
      isItemTaxable: true,
      isSSTP: false,
      itemCode: "328223580",
      lineAmount: 18.42,
      quantity: 1,
      ref1: "",
      ref2: "",
      reportingDate: "2023-05-25",
      revAccount: "",
      sourcing: "Mixed",
      tax: 1.58,
      taxableAmount: 18.42,
      taxCalculated: 1.58,
      taxCode: "P0000000",
      taxCodeId: 8087,
      taxDate: "2023-05-25",
      taxEngine: "",
      taxOverrideType: "None",
      businessIdentificationNo: "",
      taxOverrideAmount: 0,
      taxOverrideReason: "",
      taxIncluded: true,
      details: [
        {
          id: 85026453274685,
          transactionLineId: 85026453274675,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "06",
          jurisName: "CALIFORNIA",
          jurisdictionId: 5000531,
          signatureCode: "AGAM",
          stateAssignedNo: "",
          jurisType: "STA",
          jurisdictionType: "State",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.06,
          rateRuleId: 1343583,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 1.1,
          taxableAmount: 18.42,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA STATE TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 1.1,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 18.42,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 18.42,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 1.1,
          reportingTaxCalculated: 1.1,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274686,
          transactionLineId: 85026453274675,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "085",
          jurisName: "SANTA CLARA",
          jurisdictionId: 280,
          signatureCode: "AJBI",
          stateAssignedNo: "",
          jurisType: "CTY",
          jurisdictionType: "County",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.0025,
          rateRuleId: 1358122,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 0.05,
          taxableAmount: 18.42,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA COUNTY TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 0.05,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 18.42,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 18.42,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.05,
          reportingTaxCalculated: 0.05,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274687,
          transactionLineId: 85026453274675,
          transactionId: 85026453274669,
          addressId: 85026453274670,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "EMBE0",
          jurisName: "SAN FRANCISCO COUNTY DISTRICT TAX SP",
          jurisdictionId: 2001061430,
          signatureCode: "EMBE",
          stateAssignedNo: "940",
          jurisType: "STJ",
          jurisdictionType: "Special",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.01375,
          rateRuleId: 2443104,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Destination",
          tax: 0.25,
          taxableAmount: 18.42,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA SPECIAL TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 4024330,
          taxCalculated: 0.25,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 18.42,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 18.42,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.25,
          reportingTaxCalculated: 0.25,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274688,
          transactionLineId: 85026453274675,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "EMUA0",
          jurisName: "SANTA CLARA CO LOCAL TAX SL",
          jurisdictionId: 2001061797,
          signatureCode: "EMUA",
          stateAssignedNo: "43",
          jurisType: "STJ",
          jurisdictionType: "Special",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.01,
          rateRuleId: 1316507,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 0.18,
          taxableAmount: 18.42,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA SPECIAL TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 0.18,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 18.42,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 18.42,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.18,
          reportingTaxCalculated: 0.18,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
      ],
      nonPassthroughDetails: [],
      lineLocationTypes: [
        {
          documentLineLocationTypeId: 85026453274680,
          documentLineId: 85026453274675,
          documentAddressId: 85026453274671,
          locationTypeCode: "ShipFrom",
        },
        {
          documentLineLocationTypeId: 85026453274681,
          documentLineId: 85026453274675,
          documentAddressId: 85026453274670,
          locationTypeCode: "ShipTo",
        },
      ],
      hsCode: "",
      costInsuranceFreight: 0,
      vatCode: "",
      vatNumberTypeId: 0,
    },
    {
      id: 85026453274676,
      transactionId: 85026453274669,
      lineNumber: "2",
      boundaryOverrideId: 0,
      customerUsageType: "",
      entityUseCode: "",
      description: "Monospace Tee",
      destinationAddressId: 85026453274670,
      originAddressId: 85026453274671,
      discountAmount: 0,
      discountTypeId: 0,
      exemptAmount: 0,
      exemptCertId: 0,
      exemptNo: "",
      isItemTaxable: true,
      isSSTP: false,
      itemCode: "328223581",
      lineAmount: 18.42,
      quantity: 1,
      ref1: "",
      ref2: "",
      reportingDate: "2023-05-25",
      revAccount: "",
      sourcing: "Mixed",
      tax: 1.58,
      taxableAmount: 18.42,
      taxCalculated: 1.58,
      taxCode: "P0000000",
      taxCodeId: 8087,
      taxDate: "2023-05-25",
      taxEngine: "",
      taxOverrideType: "None",
      businessIdentificationNo: "",
      taxOverrideAmount: 0,
      taxOverrideReason: "",
      taxIncluded: true,
      details: [
        {
          id: 85026453274695,
          transactionLineId: 85026453274676,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "06",
          jurisName: "CALIFORNIA",
          jurisdictionId: 5000531,
          signatureCode: "AGAM",
          stateAssignedNo: "",
          jurisType: "STA",
          jurisdictionType: "State",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.06,
          rateRuleId: 1343583,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 1.1,
          taxableAmount: 18.42,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA STATE TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 1.1,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 18.42,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 18.42,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 1.1,
          reportingTaxCalculated: 1.1,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274696,
          transactionLineId: 85026453274676,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "085",
          jurisName: "SANTA CLARA",
          jurisdictionId: 280,
          signatureCode: "AJBI",
          stateAssignedNo: "",
          jurisType: "CTY",
          jurisdictionType: "County",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.0025,
          rateRuleId: 1358122,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 0.05,
          taxableAmount: 18.42,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA COUNTY TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 0.05,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 18.42,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 18.42,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.05,
          reportingTaxCalculated: 0.05,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274697,
          transactionLineId: 85026453274676,
          transactionId: 85026453274669,
          addressId: 85026453274670,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "EMBE0",
          jurisName: "SAN FRANCISCO COUNTY DISTRICT TAX SP",
          jurisdictionId: 2001061430,
          signatureCode: "EMBE",
          stateAssignedNo: "940",
          jurisType: "STJ",
          jurisdictionType: "Special",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.01375,
          rateRuleId: 2443104,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Destination",
          tax: 0.25,
          taxableAmount: 18.42,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA SPECIAL TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 4024330,
          taxCalculated: 0.25,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 18.42,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 18.42,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.25,
          reportingTaxCalculated: 0.25,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274698,
          transactionLineId: 85026453274676,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "EMUA0",
          jurisName: "SANTA CLARA CO LOCAL TAX SL",
          jurisdictionId: 2001061797,
          signatureCode: "EMUA",
          stateAssignedNo: "43",
          jurisType: "STJ",
          jurisdictionType: "Special",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.01,
          rateRuleId: 1316507,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 0.18,
          taxableAmount: 18.42,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA SPECIAL TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 0.18,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 18.42,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 18.42,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.18,
          reportingTaxCalculated: 0.18,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
      ],
      nonPassthroughDetails: [],
      lineLocationTypes: [
        {
          documentLineLocationTypeId: 85026453274690,
          documentLineId: 85026453274676,
          documentAddressId: 85026453274671,
          locationTypeCode: "ShipFrom",
        },
        {
          documentLineLocationTypeId: 85026453274691,
          documentLineId: 85026453274676,
          documentAddressId: 85026453274670,
          locationTypeCode: "ShipTo",
        },
      ],
      hsCode: "",
      costInsuranceFreight: 0,
      vatCode: "",
      vatNumberTypeId: 0,
    },
    {
      id: 85026453274677,
      transactionId: 85026453274669,
      lineNumber: "3",
      boundaryOverrideId: 0,
      customerUsageType: "",
      entityUseCode: "",
      description: "Paul's Balance 420",
      destinationAddressId: 85026453274670,
      originAddressId: 85026453274671,
      discountAmount: 0,
      discountTypeId: 0,
      exemptAmount: 0,
      exemptCertId: 0,
      exemptNo: "",
      isItemTaxable: true,
      isSSTP: false,
      itemCode: "118223581",
      lineAmount: 46.03,
      quantity: 1,
      ref1: "",
      ref2: "",
      reportingDate: "2023-05-25",
      revAccount: "",
      sourcing: "Mixed",
      tax: 3.97,
      taxableAmount: 46.03,
      taxCalculated: 3.97,
      taxCode: "P0000000",
      taxCodeId: 8087,
      taxDate: "2023-05-25",
      taxEngine: "",
      taxOverrideType: "None",
      businessIdentificationNo: "",
      taxOverrideAmount: 0,
      taxOverrideReason: "",
      taxIncluded: true,
      details: [
        {
          id: 85026453274705,
          transactionLineId: 85026453274677,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "06",
          jurisName: "CALIFORNIA",
          jurisdictionId: 5000531,
          signatureCode: "AGAM",
          stateAssignedNo: "",
          jurisType: "STA",
          jurisdictionType: "State",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.06,
          rateRuleId: 1343583,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 2.76,
          taxableAmount: 46.03,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA STATE TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 2.76,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 46.03,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 46.03,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 2.76,
          reportingTaxCalculated: 2.76,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274706,
          transactionLineId: 85026453274677,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "085",
          jurisName: "SANTA CLARA",
          jurisdictionId: 280,
          signatureCode: "AJBI",
          stateAssignedNo: "",
          jurisType: "CTY",
          jurisdictionType: "County",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.0025,
          rateRuleId: 1358122,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 0.12,
          taxableAmount: 46.03,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA COUNTY TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 0.12,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 46.03,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 46.03,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.12,
          reportingTaxCalculated: 0.12,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274707,
          transactionLineId: 85026453274677,
          transactionId: 85026453274669,
          addressId: 85026453274670,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "EMBE0",
          jurisName: "SAN FRANCISCO COUNTY DISTRICT TAX SP",
          jurisdictionId: 2001061430,
          signatureCode: "EMBE",
          stateAssignedNo: "940",
          jurisType: "STJ",
          jurisdictionType: "Special",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.01375,
          rateRuleId: 2443104,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Destination",
          tax: 0.63,
          taxableAmount: 46.03,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA SPECIAL TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 4024330,
          taxCalculated: 0.63,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 46.03,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 46.03,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.63,
          reportingTaxCalculated: 0.63,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274708,
          transactionLineId: 85026453274677,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "EMUA0",
          jurisName: "SANTA CLARA CO LOCAL TAX SL",
          jurisdictionId: 2001061797,
          signatureCode: "EMUA",
          stateAssignedNo: "43",
          jurisType: "STJ",
          jurisdictionType: "Special",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.01,
          rateRuleId: 1316507,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 0.46,
          taxableAmount: 46.03,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA SPECIAL TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 0.46,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 46.03,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 46.03,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.46,
          reportingTaxCalculated: 0.46,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
      ],
      nonPassthroughDetails: [],
      lineLocationTypes: [
        {
          documentLineLocationTypeId: 85026453274700,
          documentLineId: 85026453274677,
          documentAddressId: 85026453274671,
          locationTypeCode: "ShipFrom",
        },
        {
          documentLineLocationTypeId: 85026453274701,
          documentLineId: 85026453274677,
          documentAddressId: 85026453274670,
          locationTypeCode: "ShipTo",
        },
      ],
      hsCode: "",
      costInsuranceFreight: 0,
      vatCode: "",
      vatNumberTypeId: 0,
    },
    {
      id: 85026453274678,
      transactionId: 85026453274669,
      lineNumber: "4",
      boundaryOverrideId: 0,
      customerUsageType: "",
      entityUseCode: "",
      description: "",
      destinationAddressId: 85026453274670,
      originAddressId: 85026453274671,
      discountAmount: 0,
      discountTypeId: 0,
      exemptAmount: 0,
      exemptCertId: 0,
      exemptNo: "",
      isItemTaxable: true,
      isSSTP: false,
      itemCode: "Shipping",
      lineAmount: 54.47,
      quantity: 1,
      ref1: "",
      ref2: "",
      reportingDate: "2023-05-25",
      revAccount: "",
      sourcing: "Mixed",
      tax: 4.7,
      taxableAmount: 54.47,
      taxCalculated: 4.7,
      taxCode: "P0000000",
      taxCodeId: 8087,
      taxDate: "2023-05-25",
      taxEngine: "",
      taxOverrideType: "None",
      businessIdentificationNo: "",
      taxOverrideAmount: 0,
      taxOverrideReason: "",
      taxIncluded: true,
      details: [
        {
          id: 85026453274715,
          transactionLineId: 85026453274678,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "06",
          jurisName: "CALIFORNIA",
          jurisdictionId: 5000531,
          signatureCode: "AGAM",
          stateAssignedNo: "",
          jurisType: "STA",
          jurisdictionType: "State",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.06,
          rateRuleId: 1343583,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 3.27,
          taxableAmount: 54.47,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA STATE TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 3.27,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 54.47,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 54.47,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 3.27,
          reportingTaxCalculated: 3.27,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274716,
          transactionLineId: 85026453274678,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "085",
          jurisName: "SANTA CLARA",
          jurisdictionId: 280,
          signatureCode: "AJBI",
          stateAssignedNo: "",
          jurisType: "CTY",
          jurisdictionType: "County",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.0025,
          rateRuleId: 1358122,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 0.14,
          taxableAmount: 54.47,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA COUNTY TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 0.14,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 54.47,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 54.47,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.14,
          reportingTaxCalculated: 0.14,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274717,
          transactionLineId: 85026453274678,
          transactionId: 85026453274669,
          addressId: 85026453274670,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "EMBE0",
          jurisName: "SAN FRANCISCO COUNTY DISTRICT TAX SP",
          jurisdictionId: 2001061430,
          signatureCode: "EMBE",
          stateAssignedNo: "940",
          jurisType: "STJ",
          jurisdictionType: "Special",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.01375,
          rateRuleId: 2443104,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Destination",
          tax: 0.75,
          taxableAmount: 54.47,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA SPECIAL TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 4024330,
          taxCalculated: 0.75,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 54.47,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 54.47,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.75,
          reportingTaxCalculated: 0.75,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
        {
          id: 85026453274718,
          transactionLineId: 85026453274678,
          transactionId: 85026453274669,
          addressId: 85026453274671,
          country: "US",
          region: "CA",
          countyFIPS: "",
          stateFIPS: "",
          exemptAmount: 0,
          exemptReasonId: 4,
          inState: true,
          jurisCode: "EMUA0",
          jurisName: "SANTA CLARA CO LOCAL TAX SL",
          jurisdictionId: 2001061797,
          signatureCode: "EMUA",
          stateAssignedNo: "43",
          jurisType: "STJ",
          jurisdictionType: "Special",
          nonTaxableAmount: 0,
          nonTaxableRuleId: 0,
          nonTaxableType: "RateRule",
          rate: 0.01,
          rateRuleId: 1316507,
          rateSourceId: 3,
          serCode: "",
          sourcing: "Origin",
          tax: 0.54,
          taxableAmount: 54.47,
          taxType: "Sales",
          taxSubTypeId: "S",
          taxTypeGroupId: "SalesAndUse",
          taxName: "CA SPECIAL TAX",
          taxAuthorityTypeId: 45,
          taxRegionId: 2128577,
          taxCalculated: 0.54,
          taxOverride: 0,
          rateType: "General",
          rateTypeCode: "G",
          taxableUnits: 54.47,
          nonTaxableUnits: 0,
          exemptUnits: 0,
          unitOfBasis: "PerCurrencyUnit",
          isNonPassThru: false,
          isFee: false,
          reportingTaxableUnits: 54.47,
          reportingNonTaxableUnits: 0,
          reportingExemptUnits: 0,
          reportingTax: 0.54,
          reportingTaxCalculated: 0.54,
          liabilityType: "Seller",
          chargedTo: "Buyer",
        },
      ],
      nonPassthroughDetails: [],
      lineLocationTypes: [
        {
          documentLineLocationTypeId: 85026453274710,
          documentLineId: 85026453274678,
          documentAddressId: 85026453274671,
          locationTypeCode: "ShipFrom",
        },
        {
          documentLineLocationTypeId: 85026453274711,
          documentLineId: 85026453274678,
          documentAddressId: 85026453274670,
          locationTypeCode: "ShipTo",
        },
      ],
      hsCode: "",
      costInsuranceFreight: 0,
      vatCode: "",
      vatNumberTypeId: 0,
    },
  ],
  addresses: [
    {
      id: 85026453274670,
      transactionId: 85026453274669,
      boundaryLevel: "Address",
      line1: "600 Montgomery St",
      line2: "",
      line3: "",
      city: "San Francisco",
      region: "CA",
      postalCode: "94111-2702",
      country: "US",
      taxRegionId: 4024330,
      latitude: "37.795255",
      longitude: "-122.40313",
    },
    {
      id: 85026453274671,
      transactionId: 85026453274669,
      boundaryLevel: "Address",
      line1: "33 N 1st St",
      line2: "",
      line3: "",
      city: "Campbell",
      region: "CA",
      postalCode: "95008-2050",
      country: "US",
      taxRegionId: 2128577,
      latitude: "37.287589",
      longitude: "-121.944955",
    },
  ],
  locationTypes: [
    {
      documentLocationTypeId: 85026453274673,
      documentId: 85026453274669,
      documentAddressId: 85026453274671,
      locationTypeCode: "ShipFrom",
    },
    {
      documentLocationTypeId: 85026453274674,
      documentId: 85026453274669,
      documentAddressId: 85026453274670,
      locationTypeCode: "ShipTo",
    },
  ],
  summary: [
    {
      country: "US",
      region: "CA",
      jurisType: "State",
      jurisCode: "06",
      jurisName: "CALIFORNIA",
      taxAuthorityType: 45,
      stateAssignedNo: "",
      taxType: "Sales",
      taxSubType: "S",
      taxName: "CA STATE TAX",
      rateType: "General",
      taxable: 137.34,
      rate: 0.06,
      tax: 8.23,
      taxCalculated: 8.23,
      nonTaxable: 0,
      exemption: 0,
    },
    {
      country: "US",
      region: "CA",
      jurisType: "County",
      jurisCode: "085",
      jurisName: "SANTA CLARA",
      taxAuthorityType: 45,
      stateAssignedNo: "",
      taxType: "Sales",
      taxSubType: "S",
      taxName: "CA COUNTY TAX",
      rateType: "General",
      taxable: 137.34,
      rate: 0.0025,
      tax: 0.36,
      taxCalculated: 0.36,
      nonTaxable: 0,
      exemption: 0,
    },
    {
      country: "US",
      region: "CA",
      jurisType: "Special",
      jurisCode: "EMBE0",
      jurisName: "SAN FRANCISCO COUNTY DISTRICT TAX SP",
      taxAuthorityType: 45,
      stateAssignedNo: "940",
      taxType: "Sales",
      taxSubType: "S",
      taxName: "CA SPECIAL TAX",
      rateType: "General",
      taxable: 137.34,
      rate: 0.01375,
      tax: 1.88,
      taxCalculated: 1.88,
      nonTaxable: 0,
      exemption: 0,
    },
    {
      country: "US",
      region: "CA",
      jurisType: "Special",
      jurisCode: "EMUA0",
      jurisName: "SANTA CLARA CO LOCAL TAX SL",
      taxAuthorityType: 45,
      stateAssignedNo: "43",
      taxType: "Sales",
      taxSubType: "S",
      taxName: "CA SPECIAL TAX",
      rateType: "General",
      taxable: 137.34,
      rate: 0.01,
      tax: 1.36,
      taxCalculated: 1.36,
      nonTaxable: 0,
      exemption: 0,
    },
  ],
} as unknown as TransactionModel;
