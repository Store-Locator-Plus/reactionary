export {}; // Ensures this is treated as a module.

declare global {
    interface mySLP {
        api_key: string;
        div_id: string;
        embed_script: string;
        location_count: bigint;
        location_limit: bigint;
        map_views: bigint;
        map_views_limit: bigint;
        map_views_overage: bigint;
        map_views_over_limit: boolean;
        map_views_over_message: string;
        presentation: string;
        rest_path: string;
        site_url: string;
        version: string;
    }

    interface SLP {
        apikey: string;
        style_id: string;
    }

    interface url {
        main_site: string;
        rest: string;
        slp_documentation: string;
    }

    interface SLPReact {
        nonce: string;
        pageName: string;
        SLP: SLP;
        mySLP: mySLP;
        scriptHandle: string;
        url: url;
    }

    const slpReact: SLPReact; // Declare global variable
}