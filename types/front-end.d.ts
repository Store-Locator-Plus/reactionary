/**
 * The front-end MySLP JavaScript object.
 */
interface MySLPOptionsProps {
    api_key: string;
    map_params: string;
}

interface MySLPProps {
    loadOptions: (reload: boolean) => void;
    reloadSLPSettings: () => void; // external interface to reload SLP settings
    runAddOnScriptsDeps: () => void;
    setLayout: (layout: string) => void;
}

declare const mySLP: MySLPProps;