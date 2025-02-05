import { GEO_ASM, GEO_CLOSE_NODE, GEO_DISPLAY_LIST, GEO_END, GEO_OPEN_NODE, GEO_SCALE, GEO_SHADOW, GEO_SWITCH_CASE, LAYER_OPAQUE, LAYER_TRANSPARENT } from "../../engine/GeoLayout";
import { geo_switch_anim_state, geo_update_layer_transparency } from "../../game/ObjectHelpers";
import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow";
import { boo_castle_seg6_dl_06017CE0 } from "./model.inc";

export const boo_castle_geo = [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 70),
    GEO_OPEN_NODE(),
       GEO_SCALE(0x00, 26214),
       GEO_OPEN_NODE(),
          GEO_ASM(0, geo_update_layer_transparency),
          GEO_SWITCH_CASE(2, geo_switch_anim_state),
          GEO_OPEN_NODE(),
             GEO_DISPLAY_LIST(LAYER_OPAQUE, boo_castle_seg6_dl_06017CE0),
             GEO_DISPLAY_LIST(LAYER_TRANSPARENT, boo_castle_seg6_dl_06017CE0),
          GEO_CLOSE_NODE(),
       GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]