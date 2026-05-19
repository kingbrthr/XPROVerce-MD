const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  //====================menu=================================
  MENUMSG: function (pushname, config) {
    return `
${this.BOTNAME}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> ==========================
> ♠ 𝙾𝚠𝚗𝚎𝚛  : ${config.OWNER_NAME}
> ♠ 𝙼𝚎𝚖    : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
> ==========================`.trim();
  },
  //======================download============================
  TIKTOK: function (datas,pushname, q) {
    return `
${this.BOTNAME}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ T I K T O K  D L ]
> ========================
> * Title  * ${datas.title}
> * Author * ${datas.author}
> * URL    * ${q}
> ========================`.trim();
  },
  FACEBOOK: function (title,pushname, q) {
    return `
${this.BOTNAME}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ F A C E B O O K  D L ]
> =======================
> *TITLE* - ${title}
> *Url*   - ${q} 
> =======================`.trim();
  },
  TWITTER: function (videoDescription, videoTitle, pushname, config) {
    return `
${this.BOTNAME || config.BOTNAME || "> [⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ T W I T T E R  D L ]
> =======================
> *Desc*  : ${videoDescription || "N/A"}
> *Title* : ${videoTitle}
> =======================`.trim();
  },
  DIRECT: function(pushname,fileName,fileSize,fileType){
    return `
${this.BOTNAME}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*      
> [ D I R E C T  D L ]
> =======================        
> *File Name:* ${fileName}
> *File Size:* ${fileSize}
> *File Type:* ${fileType}
> =======================`
  },
  MEDIAFIRE: function(pushname,data,fileSize){
    return `
${this.BOTNAME}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ M E D I A F I R A ]
> ======================
> *File Name:* ${data.title}
> *File Size:* ${fileSize}
> ======================`
  },
  APK: function(pushname,data,correctsize) {
    return `
${this.BOTNAME}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ A P K  D L ]
> =======================
> *Nᴀᴍᴇ :* ${data.datalist.list[0].name}
> *Sɪᴢᴇ :* ${correctsize}MB
> *Pᴀᴄᴋᴀɢᴇ :* ${data.datalist.list[0].package}
> *Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* ${data.datalist.list[0].updated}
> *Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* ${data.datalist.list[0].developer.name}
> =======================`
  },
  SPOTIFY: function(pushname,item,config) {
    return `
${this.BOTNAME || config.BOTNAME || "> [⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ S P O T I F Y  D L ]
> =====================
> *Title*  :${item.trackName}
> *Artist* : ${item.artistName}
> *Album*  : ${item.albumName}
> *Duration*: ${item.duration}
> *URL*: [Click Here](${item.externalUrl})
> =====================`
  },
  //=================main==================================
  BOTNAME: "> [⚡ 𝗫Ｐ𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]",
  BASEMSG: function (pushname, config) {
    return `
${this.BOTNAME || config.BOTNAME || "> [⚡ 𝗫Ｐ𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> ==========================`.trim();
  },
  OWNERMENU: "*𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨*",
  CONVERTMENU: "*𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨*",
  DOWNLOADMENU: "*𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨*",
  MAINMENU: "*𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨*",
  LOGOMENU: "*𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨*",
  GROUPMENU: "*𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨*",
  AIMENU: "*𝗔𝗜 𝗠𝗘𝗡𝗨*",
  SEARCHMENU: "*𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨*",
  USEFULLMENU: "*𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨*",
  MOVIEMENU: "*𝗠𝗢𝗩𝗜𝗘 𝗠𝗘𝗡𝗨*",
  NSFWMENU: "*𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨*",
  IMG: "https://i.ibb.co/MDwfZhF0/Untitled-1.jpg",
  ALIVEVOICE: "./src/media/Auto_voice/alive.aac",
  MOVIETITLE: "> *『⚡ 𝗫Ｐ𝗥Ｏ𝗩𝗘𝗥𝗖𝗘 𝑪𝑰𝑵𝑬𝑴𝑨 』*",
  ALIVEMSG: function (config, pushname, runtime) {
    return `
> [⚡ 𝗫Ｐ𝗥Ｏ𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [  A  L  I  V  E  ]
> =======================
> ✘◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!
>>>>>>>>>>>>>>>>>>>>>>>>>
┏━━━━❮𝑻𝑶𝑫𝑎𝒚❯━━━━
┃ *${new Date().toLocaleDateString("en-GB", {timeZone: "Asia/Colombo",})}*
┃ *${new Date().toLocaleTimeString("en-GB", {timeZone: "Asia/Colombo",})}*
┗━━━━━━━━━━━━━━━
>>>>>>>>>>>>>>>>>>>>>>>>>
┏━━━━❮𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀❯━━━
┃𝙼𝚘𝚍𝚎 : ${config.MODE}
┃𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> ======================`.trim();
  },  SYSTEM: function (pushname, config, osInfo, runtime) {
    return `${this.BASEMSG(pushname, config)}
> [  S  Y  S  T  E  M  ]
> [  S  T  A  T  U  S  ]
> =======================
> *UPTIME*: ${runtime(process.uptime())}
> *RAM USAGE*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(osInfo.totalmem / 1024 / 1024)}MB
> *HOST NAME*: ${osInfo.hostname()}
> *BOT OWNER*: ${config.OWNERNAME}
> =======================`.trim();
  },
  DEFAULT_HEADER: function (pushname, config) {
    return `${this.BASEMSG(pushname, config)}`.trim();
  },
  NO_WATERMARK: function (config) {
    return `> *NO-WATERMARK*
${this.BOTNAME || config.BOTNAME || "> [⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}`.trim();
  },
  WITH_WATERMARK: function (config) {
    return `> *WITH-WATERMARK*
${this.BOTNAME || config.BOTNAME || "> [⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}`.trim();
  },
  DOWNLOAD_CAPTION: function (type, config) {
    return `> *${type}*
${this.BOTNAME || config.BOTNAME || "> [⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}`.trim();
  },
  POWERED_BY: function (config, suffix = "") {
    return `> *⚖️ Powered By - : ©${this.BOTNAME || config.BOTNAME || "[⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}${suffix}*`;
  },
  SIGNATURE: function (config) {
    return `${this.BOTNAME || config.BOTNAME || "© 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡"}`;
  },
  IMAGE_SEARCH_RESULT: function (imageUrl, index, pushname, config) {
    return `> *Image ${index + 1} from your search!* 🌟\n> *Link:* ${imageUrl}\n${this.BOTNAME || config.BOTNAME || "> [⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}`;
  },
  BING_IMAGE_RESULT: function (query, selectedImage, index, pushname, config) {
    return `> *IMAGE ${index + 1} FROM YOUR SEARCH*\n\n> *Query:* ${query}\n> *Image Link:* ${selectedImage}\n${this.BOTNAME || config.BOTNAME || "> [⚡ 𝗫𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}`;
  },
  PINTEREST_IMAGE_RESULT: function (query, config) {
    return `> *Pinterest Search Result* 🌟\n> *Query*: ${query}\n> *Source*: Pinterest\n${this.BOTNAME || config.BOTNAME || "> [⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}`;
  },
  WALLPAPER_IMAGE_RESULT: function (query, title, config) {
    return `> *Wallpaper Search Result* 🌟\n> *Query*: ${query}\n> *Title*: ${title}\n${this.BOTNAME || config.BOTNAME || "> [⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}`;
  },
  PASSWORD_MESSAGE: function (password, config) {
    return `Please find your generated password below:\n> ${this.BOTNAME || config.BOTNAME || "⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡"}\n${password}`;
  },
  REMOVE_BG_CAPTION: function (config) {
    return `✨ *SCREEN SHOT GET SUCCESFULY!* ✨\n\n> *⚡ Powered by - ©${this.BOTNAME || config.BOTNAME || "[⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"} 💚*`;
  },
  FANCY_HEADER: function (config) {
    return `Fancy Text Styles\n\nBY © ${this.BOTNAME || config.BOTNAME || "[⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}\nExample: .fancy 32\n\n`;
  },
  HIJACT_STATUS: function (config) {
    return `> GROUP HIJACT COMPLETE BY ${this.BOTNAME || config.BOTNAME || "[⚡ 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]"}☣`;
  },
  GROUP_SIGNATURE: function (config) {
    return `\n\n${this.BOTNAME || config.BOTNAME || "© 𝗫𝗣𝗥𝗢𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡"}`;
  },  //====================movie======================================
  GROUP: function (groupName, config,oce) {
    return `
> 📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${oce}${groupName}${oce}
> 🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${oce}${config.MNAME}${oce}`.trim();
  },
  SINHALASUB: function (movieData,oce) {
    return `
> *『⚡ 𝗫Ｐ𝗥Ｏ𝗩𝗘𝗥𝗖𝗘 𝑪𝑰𝑵𝑬𝑴𝑨 』*
> =====================
> 🎬 *Title:* ${oce}${movieData.title}${oce}
> 📝 *Tagline:* ${oce}${movieData.metadata.tagline || "N/A"}${oce}
> ⭐ *IMDb:* ${oce}${movieData.metadata.imdbRating || "N/A"}${oce}
> 🗓️ *Year:* ${oce}${movieData.metadata.year}${oce}
> 🌍 *Country:* ${oce}${movieData.metadata.country}${oce}
> 🎭 *Genres:* ${oce}${movieData.metadata.genres.join(", ")}${oce}
> ⏱️ *Duration:* ${oce}${movieData.metadata.duration}${oce}
> 🗣️ *Language:* ${oce}${movieData.metadata.language}${oce}
> 👨‍💻 *Subtitle By:* ${oce}${movieData.metadata.subtitleAuthor}${oce}
> 🌐 *Subtitle Site:* ${oce}${movieData.metadata.subtitleSite}${oce}
> =====================
> 📌 *Description:*  
> ${oce}_${movieData.description}_${oce}`.trim();
  },
  CINESUBZ: function (title, metadata, rating,tagline,genres,quality,description,oce) {
    return `
> *『⚡ 𝗫ＰＲＯ𝗩ＥＲＣＥ 𝑪𝑰𝑵𝑬𝑴𝑨 』*
> =====================
> 🎬 *Title:* ${oce}${title}${oce}
> 📝 *Tagline:* ${oce}${tagline || "N/A"}${oce}
> ⭐ *IMDb:* ${oce}${typeof rating === 'object' ? rating.value : rating}${oce}
> 🗓️ *Year:* ${oce}${metadata?.year || "N/A"}${oce}
> 🌍 *Country:* ${oce}${metadata?.country || "N/A"}${oce}
> 🎭 *Genres:* ${oce}${genres}${oce}
> ⏱️ *Duration:* ${oce}${metadata?.runtime || metadata?.duration || "N/A"}${oce}
> 🗣️ *Language:* ${oce}${metadata?.language || "English"}${oce}
> 👨‍💻 *Subtitle By:* ${oce}${metadata?.subtitleBy || "N/A"}${oce}
> 📊 *Quality:* ${oce}${quality}${oce}
> =====================
> 📌 *Description:*  
> ${oce}_${description ? description.substring(0, 400) + (description.length > 400 ? "..." : "") : "No description available."}_${oce}`.trim();
  },
  CINETVSHOW: function (episodeInfo,quality,oce) {
    return `
> *『⚡ 𝗫ＰＲＯ𝗩ＥＲＣＥ 𝑪𝑰𝑵𝑬𝑴𝑨 』*
> =====================
> 📺 *Series:* ${oce}${episodeInfo.series || "N/A"}${oce}
> 🎬 *Episode:* ${oce}${episodeInfo.seasonEpisode || "N/A"}${oce}
> 🏷️ *Title:* ${oce}${episodeInfo.episodeTitle || "N/A"}${oce}
> 📅 *Date:* ${oce}${episodeInfo.date || "N/A"}${oce}
> ⭐ *Rating:* ${oce}${episodeInfo.rating?.value || "N/A"}/10${oce}
> 📊 *Quality:* ${oce}${quality || "480p"}${oce}
> =====================
> 📌 *Episode Info:*
> ${oce}_${episodeInfo.title || "No additional information available."}_${oce}`.trim();
  },
  CINETVSHOWALLDL: function (seriesTitle,rating,metadata,genres,movieData,oce) {
    return `
> *『⚡ 𝗫ＰＲＯ𝗩ＥＲＣＥ 𝑪𝑰𝑵𝑬𝑴𝑨 』*
> =====================
> 🎬 *Series:* ${oce}${seriesTitle}${oce}
> ⭐ *IMDb:* ${oce}${rating}${oce}
> 🗓️ *Year:* ${oce}${metadata.year || "N/A"}${oce}
> 🎭 *Genres:* ${oce}${genres}${oce}
> 📊 *Seasons:* ${oce}${movieData.seasons.length}${oce}
> 🌐 *Language:* ${oce}${metadata.language || "English"}${oce}
> =====================
> 📌 *Series Description:*  
> ${oce}_${movieData.description || "No description available."}_${oce}`.trim();
  },
  //=====================mvdl===========================================
  MVDL_SEARCH_PROMPT: "Give a movie or series name.",
  MVDL_NO_RESULTS: "No results found.",
  MVDL_SEARCH_FAILED: "Search failed.",
  MVDL_SEARCH_RESULTS: function (q) {
    return `🔎 Search results for *${q}*`;
  },
  MVDL_INVALID_REQUEST: "Invalid request.",
  MVDL_INFO_FAILED: "Failed to load info.",
  MVDL_NO_SEASONS: "No seasons found.",
  MVDL_MOVIE_INFO: function (info, isMovie, genres, duration, rating, dubs, cast) {
    let caption = `🎬 *${info.title}*`;
    if (!isMovie) caption += `\n📺 *TV Series*`;
    caption += `
📅 Release: ${info.releaseDate || "Unknown"}
⏳ Duration: ${duration}
🌍 Country: ${info.country || "Unknown"}
🎭 Genre: ${genres}
${rating}
🗣️ Audio: ${dubs}
🎭 Cast: ${cast}
📝 Story: ${info.description?.slice(0, 400) || "No description"}\n`;
    return caption;
  },
  MVDL_CHOOSE_QUALITY: "Choose quality 👇",
  MVDL_CHOOSE_SEASON: "Choose a season 👇",
  MVDL_SEASON_FAILED: "Failed to load season.",
  MVDL_SEASON_CAPTION: function (info, seasonNumber, maxEpisode) {
    return `📺 *${info.title}* — Season ${seasonNumber}\n${maxEpisode} episodes\nChoose an episode 👇`;
  },
  MVDL_EPISODE_FAILED: "Failed to load episode.",
  MVDL_EPISODE_CAPTION: function (info, seasonNumber, episodeNumber) {
    return `📺 *${info.title}* — S${seasonNumber}E${episodeNumber}\nChoose quality 👇`;
  },
  MVDL_DOWNLOAD_INFO: function (title, season, episode, quality, config) {
    return `🎬 *${title}*\n${season !== undefined ? `📺 S${season}E${episode}` : ""}\n📦 Quality: ${quality}p\n⏳ Download started...\n${config.FOOTER || ""}`;
  },
  MVDL_DOWNLOAD_SUCCESS: "✅ Download finished and sent!",
  MVDL_DOWNLOAD_FAILED: "Download failed.",
  MVDL_MOVIE_CAPTION: function (title, season, episode, totalSize, config) {
    let caption = `🎬 *${title}*\n`;
    if (season !== undefined) caption += `📺 S${season}E${episode}\n`;
    caption += `📦 ${(totalSize / 1024 / 1024).toFixed(2)} MB\n${config.FOOTER || ""}`;
    return caption;
  },
  MVDL_SUB_INVALID: "Invalid subtitle request.",
  MVDL_SUB_NO_AVAILABLE: "No subtitles available.",
  MVDL_SUB_FAILED: "Subtitle download failed.",
  MVDL_SUB_LANGUAGES: "📝 Subtitle languages\nChoose one 👇",
  MVDL_SUB_CAPTION: function (langName) {
    return `📝 Subtitle: ${langName}`;
  },
  MVDL_MOVIE_CARD: function (info, quality, size, season, episode, oce) {
    const isMovie = !season;
    const fileSize = (size / 1024 / 1024).toFixed(2);
    
    let caption = `🎬 *${this.BOTNAME}*\n`;
    caption += `═══════════════════════════════\n`;
    
    if (isMovie) {
      caption += `🎥 *MOVIE DETAILS*\n`;
    } else {
      caption += `📺 *TV SHOW EPISODE*\n`;
    }
    
    caption += `═══════════════════════════════\n`;
    caption += `📽️ *Title:* ${oce}${info.title}${oce}\n`;
    
    if (!isMovie) {
      caption += `📺 *Season:* ${oce}${season}${oce}\n`;
      caption += `🎬 *Episode:* ${oce}${episode}${oce}\n`;
    }
    
    caption += `⭐ *IMDb:* ${oce}${info.imdbRating || "N/A"}${oce}\n`;
    caption += `🗓️ *Year:* ${oce}${info.releaseDate || "N/A"}${oce}\n`;
    caption += `🌍 *Country:* ${oce}${info.country || "N/A"}${oce}\n`;
    
    const genres = info.genre?.split(",").slice(0, 3).join(" • ") || "N/A";
    caption += `🎭 *Genres:* ${oce}${genres}${oce}\n`;
    
    const duration = info.duration 
      ? `${Math.floor(info.duration / 3600)}h ${Math.floor((info.duration % 3600) / 60)}m`
      : "N/A";
    caption += `⏱️ *Duration:* ${oce}${duration}${oce}\n`;
    
    const dubs = info.dubs?.slice(0, 3).map((d) => d.language.lanName).join(", ") || "Original";
    caption += `🗣️ *Audio:* ${oce}${dubs}${oce}\n`;
    
    const cast = info.cast?.slice(0, 3).map((c) => c.name).join(", ") || "N/A";
    caption += `🎭 *Cast:* ${oce}${cast}${oce}\n`;
    
    caption += `═══════════════════════════════\n`;
    caption += `📥 *DOWNLOAD DETAILS*\n`;
    caption += `═══════════════════════════════\n`;
    caption += `📊 *Quality:* ${oce}${quality}p${oce}\n`;
    caption += `📦 *Size:* ${oce}${fileSize} MB${oce}\n`;
    caption += `⚡ *Status:* ${oce}Ready to Download${oce}\n`;
    caption += `═══════════════════════════════\n`;
    
    if (info.description) {
      const desc = info.description.slice(0, 300) + (info.description.length > 300 ? "..." : "");
      caption += `📝 *Story:* ${oce}${desc}${oce}\n`;
    }
    
    caption += `═══════════════════════════════\n`;
    caption += `${this.BOTNAME} | Movie Downloader\n`;
    
    return caption.trim();
  },
  // Baiscope.lk Templates
BAISCOPE_SEARCH_PROMPT: "🎬 Please provide a movie or TV show name to search on Baiscope.lk\n\nExample: .baiscope Godzilla",
BAISCOPE_NO_RESULTS: "❌ No results found. Try a different keyword.",
BAISCOPE_SEARCH_RESULTS: (q) => `🔍 Search Results for "${q}" on Baiscope.lk:\n\nSelect a movie/TV show from the buttons below.`,
BAISCOPE_SEARCH_FAILED: "❌ Failed to search. Please try again later.",
BAISCOPE_INVALID_REQUEST: "❌ Invalid request. Please use the buttons to navigate.",
BAISCOPE_MOVIE_INFO: (info, title, genres, rating, duration, director, cast) => `
*🎬 ${title}*

📌 *Genres:* ${genres}
⭐ *Rating:* ${rating}
⏱️ *Duration:* ${duration}
🎥 *Director:* ${director}
👥 *Cast:* ${cast}

📝 *Description:* ${info.description?.substring(0, 300)}...
`,
BAISCOPE_CHOOSE_QUALITY: "\n\n📥 *Select a quality to download:*",
BAISCOPE_DIRECT_CAPTION: (title, quality, size, config) => `
*🎬 ${title}*
📥 *Quality:* ${quality}
💾 *Size:* ${size}

✅ *Streaming directly – no download required!*
${config.FOOTER}
`,
BAISCOPE_DOWNLOAD_SUCCESS: "✅ Video sent successfully! Enjoy the movie.",
BAISCOPE_DOWNLOAD_FAILED: "❌ Failed to send the video. Please try again later.",
BAISCOPE_INFO_FAILED: "❌ Failed to fetch movie details. Please try again.",
  //=====================youtube===========================================
  SONG: function (data,pushname,oce) {
    return `
${this.BOTNAME}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> ==========================
> ${oce}[  S  O  N  G    D  L  ]${oce}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> 🎶 *Title:* ${data.title}
> ⏱️ *Duration:* ${data.timestamp}
> 👁️ *Views:* ${data.views}
> 📅 *Uploaded On:* ${data.ago}
> 🔗 *Link:* ${data.url}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> =========================`.trim();
  },
  YTMP3: function (data) {
    return `
${this.BOTNAME}
> ==========================
> ➥ *Title:* ${data.title} 
> ➥ *Duration:* ${data.timestamp} 
> ➥ *Uploaded On:* ${data.ago} 
> ➥ *Link:* ${data.url}
> ==========================
        `.trim();
  },
  VIDEO: function (data,pushname,oce) {
    return  `
> [⚡ 𝗫Ｐ𝗥Ｏ𝗩𝗘𝗥𝗖𝗘 〽ᴅ ⚡]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> ==========================
> ${oce}[  Y O U T U B E    D  L  ]${oce}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> 🎶 *Title:* ${data.title}
> ⏱️ *Duration:* ${data.timestamp}
> 👁️ *Views:* ${data.views}
> 📅 *Uploaded On:* ${data.ago}
> 🔗 *Link:* ${data.url}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> =========================`.trim();
  },
  YTMP4: function (data) {
    return `
${this.BOTNAME}
> ==========================
> ➥ *Title:* ${data.title} 
> ➥ *Duration:* ${data.timestamp} 
> ➥ *Uploaded On:* ${data.ago} 
> ➥ *Link:* ${data.url}
> ==========================
        `.trim();
  },
};
