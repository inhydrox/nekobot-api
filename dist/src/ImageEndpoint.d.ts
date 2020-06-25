import { NekoBot } from "./NekoBot";
import { ImageEndpointType } from "./Types";
/**
 * Creates an instance of ImageEndpoint.
 * @class ImageEndpoint
 * @param {NekoBot} client
 */
declare class ImageEndpoint {
    client: NekoBot;
    constructor(client: NekoBot);
    /**
     * @param {ImageEndpointType} type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food, cosplay, paizuri, tentacle.
     * @returns {(Promise<String | void>)} Image URL
     */
    getImage(type: ImageEndpointType): Promise<String | void>;
}
export { ImageEndpoint };
