import z from "zod";

export const ipApiResponseSchema = z.object({
    // "ip": "104.157.7.112",
    // "network": "104.157.4.0/22",
    // "version": "IPv4",
    // "city": "Calgary",
    // "region": "Alberta",
    // "region_code": "AB",
    country: z.string().optional(),
    // "country_name": "Canada",
    // "country_code": "CA",
    // "country_code_iso3": "CAN",
    // "country_capital": "Ottawa",
    // "country_tld": ".ca",
    // "continent_code": "NA",
    // "in_eu": false,
    // "postal": "T2X",
    // "latitude": 50.8833,
    // "longitude": -114.0334,
    // "timezone": "America/Edmonton",
    // "utc_offset": "-0700",
    // "country_calling_code": "+1",
    // "currency": "CAD",
    // "currency_name": "Dollar",
    // "languages": "en-CA,fr-CA,iu",
    // "country_area": 9984670.0,
    // "country_population": 37058856,
    // "asn": "AS852",
    // "org": "TELUS Communications"
})

export type IpApiResponseDto = z.infer<typeof ipApiResponseSchema>;