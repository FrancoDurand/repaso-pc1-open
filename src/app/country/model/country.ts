type CountryType = {
    country_name: string,
    iso_3166: string,
    total_holidays: number,
    supported_languages: number,
    flag_unicode: string,
    uuid: string
}

export class Country {
    country_name: string;
    iso_3166: string;
    total_holidays: number;
    supported_languages: number;
    flag_unicode: string;
    uuid: string;

    constructor({ country_name, iso_3166, total_holidays, supported_languages, flag_unicode, uuid }: CountryType) {
        this.country_name = country_name;
        this.iso_3166 = iso_3166;
        this.total_holidays = total_holidays;
        this.supported_languages = supported_languages;
        this.flag_unicode = flag_unicode;
        this.uuid = uuid;
    }
}