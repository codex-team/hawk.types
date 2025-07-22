/**
 * Additional data extracted from the Sentry event payload
 */
export interface SentryAddons {
    message?: string;
    logentry?: {
        message?: string;
        params?: string[];
    };
    level?: 'fatal' | 'error' | 'warning' | 'log' | 'info' | 'debug';
    platform?: string;
    logger?: string;
    server_name?: string;
    dist?: string;
    environment?: string;
    request?: {
        url?: string;
        method?: string;
        data?: any;
        query_string?: string | {
            [key: string]: string;
        } | Array<[string, string]>;
        cookies?: {
            [key: string]: string;
        };
        env?: {
            [key: string]: string;
        };
        headers?: {
            [key: string]: string;
        };
    };
    transaction?: string;
    modules?: {
        [key: string]: string;
    };
    fingerprint?: string[];
    tags?: {
        [key: string]: number | string | boolean | bigint | symbol | null | undefined;
    };
    extra?: Record<string, unknown>;
}
