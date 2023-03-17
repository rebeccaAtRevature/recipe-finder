export interface Digest {
    DigestEntry?: any;
}

interface DigestEntry {
    label?: string;
    tag?: string;
    schemaOrgTag?: string;
    total?: number;
    hasRDI?: boolean;
    daily?: number;
    unit?: string;
    sub?: Digest;
}