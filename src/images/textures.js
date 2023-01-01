import { grassImg } from "./images";
import { TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg);

export { groundTexture };
