export const ICON_MAP_NIGHT = new Map()

addMapping([800], "clear night")
addMapping([802,803,804], "cloudy")
addMapping([300,301,302,310,311,312,313,314,321, 500,501,502,503,504,511,520,521,522,531], "rain")
addMapping([600,601,602,611,612,613,615,616,620,621,622], "snow")
addMapping([801], "partly cloudy night")
addMapping([200,201,202,210,211,212,221,230,231,232], "thunderstorm")
addMapping([701,711,721,731,741], "foggy")
addMapping([781], "tornado")
addMapping([751, 761, 762, 771], "dust")



function addMapping(values, icon) {
  values.forEach(value => {
    ICON_MAP_NIGHT.set(value, icon)
  })
}