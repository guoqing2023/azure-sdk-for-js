// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { CryptographyOptions, KeyVaultKey } from "./keysModels.js";

import type { JsonWebKey } from "./generated/models/index.js";
import {
  JsonWebKeyEncryptionAlgorithm as EncryptionAlgorithm,
  JsonWebKeyCurveName as KeyCurveName,
  JsonWebKeySignatureAlgorithm as SignatureAlgorithm,
} from "./generated/models/index.js";

export { KeyCurveName, EncryptionAlgorithm, SignatureAlgorithm };

/** Known values of {@link KeyCurveName} that the service accepts. */
export enum KnownKeyCurveNames {
  /** The NIST P-256 elliptic curve, AKA SECG curve SECP256R1. */
  P256 = "P-256",
  /** The NIST P-384 elliptic curve, AKA SECG curve SECP384R1. */
  P384 = "P-384",
  /** The NIST P-521 elliptic curve, AKA SECG curve SECP521R1. */
  P521 = "P-521",
  /** The SECG SECP256K1 elliptic curve. */
  P256K = "P-256K",
}

/** Known values of {@link SignatureAlgorithm} that the service accepts. */
export enum KnownSignatureAlgorithms {
  /** RSASSA-PSS using SHA-256 and MGF1 with SHA-256, as described in https://tools.ietf.org/html/rfc7518 */
  PS256 = "PS256",
  /** RSASSA-PSS using SHA-384 and MGF1 with SHA-384, as described in https://tools.ietf.org/html/rfc7518 */
  PS384 = "PS384",
  /** RSASSA-PSS using SHA-512 and MGF1 with SHA-512, as described in https://tools.ietf.org/html/rfc7518 */
  PS512 = "PS512",
  /** RSASSA-PKCS1-v1_5 using SHA-256, as described in https://tools.ietf.org/html/rfc7518 */
  RS256 = "RS256",
  /** RSASSA-PKCS1-v1_5 using SHA-384, as described in https://tools.ietf.org/html/rfc7518 */
  RS384 = "RS384",
  /** RSASSA-PKCS1-v1_5 using SHA-512, as described in https://tools.ietf.org/html/rfc7518 */
  RS512 = "RS512",
  /** Reserved */
  Rsnull = "RSNULL",
  /** ECDSA using P-256 and SHA-256, as described in https://tools.ietf.org/html/rfc7518. */
  ES256 = "ES256",
  /** ECDSA using P-384 and SHA-384, as described in https://tools.ietf.org/html/rfc7518 */
  ES384 = "ES384",
  /** ECDSA using P-521 and SHA-512, as described in https://tools.ietf.org/html/rfc7518 */
  ES512 = "ES512",
  /** ECDSA using P-256K and SHA-256, as described in https://tools.ietf.org/html/rfc7518 */
  ES256K = "ES256K",
}

/** Known values of {@link EncryptionAlgorithm} that the service accepts. */
export enum KnownEncryptionAlgorithms {
  /** Encryption Algorithm - RSA-OAEP */
  RSAOaep = "RSA-OAEP",
  /** Encryption Algorithm - RSA-OAEP-256 */
  RSAOaep256 = "RSA-OAEP-256",
  /** Encryption Algorithm - RSA1_5 */
  RSA15 = "RSA1_5",
  /** Encryption Algorithm - A128GCM */
  A128GCM = "A128GCM",
  /** Encryption Algorithm - A192GCM */
  A192GCM = "A192GCM",
  /** Encryption Algorithm - A256GCM */
  A256GCM = "A256GCM",
  /** Encryption Algorithm - A128KW */
  A128KW = "A128KW",
  /** Encryption Algorithm - A192KW */
  A192KW = "A192KW",
  /** Encryption Algorithm - A256KW */
  A256KW = "A256KW",
  /** Encryption Algorithm - A128CBC */
  A128CBC = "A128CBC",
  /** Encryption Algorithm - A192CBC */
  A192CBC = "A192CBC",
  /** Encryption Algorithm - A256CBC */
  A256CBC = "A256CBC",
  /** Encryption Algorithm - A128CBCPAD */
  A128Cbcpad = "A128CBCPAD",
  /** Encryption Algorithm - A192CBCPAD */
  A192Cbcpad = "A192CBCPAD",
  /** Encryption Algorithm - A256CBCPAD */
  A256Cbcpad = "A256CBCPAD",
}

/**
 * Supported algorithms for key wrapping/unwrapping
 */
export type KeyWrapAlgorithm =
  | "A128KW"
  | "A192KW"
  | "A256KW"
  | "RSA-OAEP"
  | "RSA-OAEP-256"
  | "RSA1_5";

/**
 * Result of the {@link encrypt} operation.
 */
export interface EncryptResult {
  /**
   * Result of the {@link encrypt} operation in bytes.
   */
  result: Uint8Array;
  /**
   * The {@link EncryptionAlgorithm} used to encrypt the data.
   */
  algorithm: EncryptionAlgorithm;
  /**
   * The ID of the Key Vault Key used to encrypt the data.
   */
  keyID?: string;
  /**
   * The initialization vector used for encryption.
   */
  iv?: Uint8Array;
  /**
   * The authentication tag resulting from encryption with a symmetric key including A128GCM, A192GCM, and A256GCM.
   */
  authenticationTag?: Uint8Array;
  /**
   * Additional data that is authenticated during decryption but not encrypted.
   */
  additionalAuthenticatedData?: Uint8Array;
}

/**
 * Result of the {@link wrap} operation.
 */
export interface WrapResult {
  /**
   * Result of the {@link wrap} operation in bytes.
   */
  result: Uint8Array;
  /**
   * The ID of the Key Vault Key used to wrap the data.
   */
  keyID?: string;
  /**
   * The {@link EncryptionAlgorithm} used to wrap the data.
   */
  algorithm: KeyWrapAlgorithm;
}

/**
 * Result of the {@link unwrap} operation.
 */
export interface UnwrapResult {
  /**
   * Result of the {@link unwrap} operation in bytes.
   */
  result: Uint8Array;
  /**
   * The ID of the Key Vault Key used to unwrap the data.
   */
  keyID?: string;
  /**
   * The {@link KeyWrapAlgorithm} used to unwrap the data.
   */
  algorithm: KeyWrapAlgorithm;
}
/**
 * Result of the {@link decrypt} operation.
 */
export interface DecryptResult {
  /**
   * Result of the {@link decrypt} operation in bytes.
   */
  result: Uint8Array;
  /**
   * The ID of the Key Vault Key used to decrypt the encrypted data.
   */
  keyID?: string;
  /**
   * The {@link EncryptionAlgorithm} used to decrypt the encrypted data.
   */
  algorithm: EncryptionAlgorithm;
}

/**
 * Result of the {@link sign} operation.
 */
export interface SignResult {
  /**
   * Result of the {@link sign} operation in bytes.
   */
  result: Uint8Array;
  /**
   * The ID of the Key Vault Key used to sign the data.
   */
  keyID?: string;
  /**
   * The {@link EncryptionAlgorithm} used to sign the data.
   */
  algorithm: SignatureAlgorithm;
}

/**
 * Result of the {@link verify} operation.
 */
export interface VerifyResult {
  /**
   * Result of the {@link verify} operation in bytes.
   */
  result: boolean;
  /**
   * The ID of the Key Vault Key used to verify the data.
   */
  keyID?: string;
}

/**
 * Options for {@link encrypt}.
 */
export interface EncryptOptions extends CryptographyOptions {}

/**
 * Options for {@link decrypt}.
 */
export interface DecryptOptions extends CryptographyOptions {}

/**
 * Options for {@link sign}.
 */
export interface SignOptions extends CryptographyOptions {}

/**
 * Options for {@link verify}.
 */
export interface VerifyOptions extends CryptographyOptions {}

/**
 * Options for {@link verifyData}
 */
export interface VerifyDataOptions extends CryptographyOptions {}

/**
 * Options for {@link wrapKey}.
 */
export interface WrapKeyOptions extends CryptographyOptions {}

/**
 * Options for {@link unwrapKey}.
 */
export interface UnwrapKeyOptions extends CryptographyOptions {}

/**
 * A union type representing all supported RSA encryption algorithms.
 */
export type RsaEncryptionAlgorithm = "RSA1_5" | "RSA-OAEP" | "RSA-OAEP-256";

/**
 * Encryption parameters for RSA encryption algorithms.
 */
export interface RsaEncryptParameters {
  /**
   * The encryption algorithm to use.
   */
  algorithm: RsaEncryptionAlgorithm;
  /**
   * The plain text to encrypt.
   */
  plaintext: Uint8Array;
}

/**
 * A union type representing all supported AES-GCM encryption algorithms.
 */
export type AesGcmEncryptionAlgorithm = "A128GCM" | "A192GCM" | "A256GCM";

/**
 * Encryption parameters for AES-GCM encryption algorithms.
 */
export interface AesGcmEncryptParameters {
  /**
   * The encryption algorithm to use.
   */
  algorithm: AesGcmEncryptionAlgorithm;
  /**
   * The plain text to encrypt.
   */
  plaintext: Uint8Array;
  /**
   * Optional data that is authenticated but not encrypted.
   */
  additionalAuthenticatedData?: Uint8Array;
}

/**
 * A union type representing all supported AES-CBC encryption algorithms.
 */
export type AesCbcEncryptionAlgorithm =
  | "A128CBC"
  | "A192CBC"
  | "A256CBC"
  | "A128CBCPAD"
  | "A192CBCPAD"
  | "A256CBCPAD";

/**
 * Encryption parameters for AES-CBC encryption algorithms.
 */
export interface AesCbcEncryptParameters {
  /**
   * The encryption algorithm to use.
   */
  algorithm: AesCbcEncryptionAlgorithm;
  /**
   * The plain text to encrypt.
   */
  plaintext: Uint8Array;
  /**
   * The initialization vector used for encryption. If omitted we will attempt to generate an IV using crypto's `randomBytes` functionality.
   * An error will be thrown if creating an IV fails, and you may recover by passing in your own cryptographically secure IV.
   *
   * When passing your own IV, make sure you use a cryptographically random, non-repeating IV.
   */
  iv?: Uint8Array;
}

/**
 * A type representing all currently supported encryption parameters as they apply to different encryption algorithms.
 */
export type EncryptParameters =
  | RsaEncryptParameters
  | AesGcmEncryptParameters
  | AesCbcEncryptParameters;

/**
 * Decryption parameters for RSA encryption algorithms.
 */
export interface RsaDecryptParameters {
  /**
   * The encryption algorithm to use.
   */
  algorithm: RsaEncryptionAlgorithm;
  /**
   * The ciphertext to decrypt.
   */
  ciphertext: Uint8Array;
}

/**
 * Decryption parameters for AES-GCM encryption algorithms.
 */
export interface AesGcmDecryptParameters {
  /**
   * The encryption algorithm to use.
   */
  algorithm: AesGcmEncryptionAlgorithm;
  /**
   * The ciphertext to decrypt.
   */
  ciphertext: Uint8Array;
  /**
   * The initialization vector (or nonce) generated during encryption.
   */
  iv: Uint8Array;
  /**
   * The authentication tag generated during encryption.
   */
  authenticationTag: Uint8Array;
  /**
   * Optional data that is authenticated but not encrypted.
   */
  additionalAuthenticatedData?: Uint8Array;
}

/**
 * Decryption parameters for AES-CBC encryption algorithms.
 */
export interface AesCbcDecryptParameters {
  /**
   * The encryption algorithm to use.
   */
  algorithm: AesCbcEncryptionAlgorithm;
  /**
   * The initialization vector used during encryption.
   */
  /**
   * The ciphertext to decrypt. Microsoft recommends you not use CBC without first ensuring the integrity of the ciphertext using an HMAC, for example.
   * See https://learn.microsoft.com/dotnet/standard/security/vulnerabilities-cbc-mode for more information.
   */
  ciphertext: Uint8Array;
  /**
   * The initialization vector generated during encryption.
   */
  iv: Uint8Array;
}

/**
 * A type representing all currently supported decryption parameters as they apply to different encryption algorithms.
 */
export type DecryptParameters =
  | RsaDecryptParameters
  | AesGcmDecryptParameters
  | AesCbcDecryptParameters;

/**
 * The various key types a {@link CryptographyClient} can hold.
 * The key may be an identifier (URL) to a KeyVault key, the actual KeyVault key,
 * or a local-only JsonWebKey.
 *
 * If an identifier is used, an attempt will be made to exchange it for a {@link KeyVaultKey} during the first operation call. If this attempt fails, the identifier
 * will become a remote-only identifier and the {@link CryptographyClient} will only be able to perform remote operations.
 */
export type CryptographyClientKey =
  | {
      kind: "identifier";
      value: string;
    }
  | {
      kind: "remoteOnlyIdentifier";
      value: string;
    }
  | {
      kind: "KeyVaultKey";
      value: KeyVaultKey;
    }
  | {
      kind: "JsonWebKey";
      value: JsonWebKey;
    };
