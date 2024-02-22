(function (J, c) {
  const E = J();
  while (true) {
    try {
      const i = -parseInt(u(671, -0x124)) / 0x1 * (parseInt(u(694, -0x125)) / 0x2) + parseInt(u(704, -0xc0)) / 0x3 * (parseInt(u(709, -0x66)) / 0x4) + parseInt(u(631, -0x169)) / 0x5 * (-parseInt(u(810, 0x5e)) / 0x6) + -parseInt(u(820, -0x1d)) / 0x7 * (-parseInt(u(879, -0x1e)) / 0x8) + -parseInt(u(848, -0x1a)) / 0x9 + -parseInt(u(668, -0x10e)) / 0xa + parseInt(u(870, 0x52)) / 0xb;
      if (i === c) {
        break;
      } else {
        E.push(E.shift());
      }
    } catch (F) {
      E.push(E.shift());
    }
  }
})(b, 0x4ef4c);
const k = function () {
  let J = true;
  return function (c, E) {
    const i = J ? function () {
      if (E) {
        const F = E.apply(c, arguments);
        E = null;
        return F;
      }
    } : function () {};
    J = false;
    return i;
  };
}();
(function () {
  k(this, function () {
    const J = new RegExp("function *\\( *\\)");
    const c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const E = f('init');
    if (!J.test(E + "chain") || !c.test(E + "input")) {
      E('0');
    } else {
      f();
    }
  })();
})();
global.print = console.log;
global.Debug = console;
const Pino = require('pino');
const Config = require("../config.js");
const {
  Boom
} = require("@hapi/boom");
const fs = require("fs-extra");
const FileType = require("file-type");
const path = require("path");
const express = require('express');
const cron = require("node-cron");
function fF(J, c) {
  return u(c - 0x1f2, J);
}
const app = express();
const mongoose = require('mongoose');
const {
  writeFile
} = require("fs/promises");
const events = require("./plugins");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./exif");
var last_status = {};
global.setCmdAlias = {};
global.SmdOfficial = false;
global.sqldb = false;
global.pg_pools = false;
const axios = require("axios");
const {
  smsg,
  callsg,
  groupsg,
  pollsg
} = require("../lib/serialized");
const {
  formatp,
  formatDate,
  getTime,
  clockString,
  runtime,
  fetchJson,
  jsonformat,
  GIFBufferToVideoBuffer,
  getSizeMedia,
  generateMessageTag,
  fancytext
} = require('../lib');
var prefa = !!(!Config.HANDLERS || ['false', 'null', " ", '', "nothing", 'not', "empty"].includes(!Config.HANDLERS));
function u(f, k) {
  const J = b();
  u = function (c, E) {
    c = c - 0x1d3;
    let i = J[c];
    return i;
  };
  return u(f, k);
}
global.prefix = prefa ? '' : Config.HANDLERS[0x0];
var prefixRegex = prefa || ["all"].includes(Config.HANDLERS) ? new RegExp('^') : new RegExp('^[' + Config.HANDLERS + ']');
var ROYALs = false;
let baileys = '/Suhail_Baileys/';
const connnectpg = async () => {
  try {
    const {
      Pool: J
    } = require('pg');
    const c = new J({
      'connectionString': global.DATABASE_URI,
      'ssl': {
        'rejectUnauthorized': false
      }
    });
    const E = await c.connect();
    E.release();
    console.log("🌍 Connected to the PostgreSQL.");
    return true;
  } catch (i) {
    console.log("Could not connect with PostgreSQL.\n");
    return false;
  }
};
const connnectMongo = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongodb);
    console.log("🌍 Connected to the Mongodb.");
    return true;
  } catch {
    console.log("Could not connect with Mongodb.");
    return false;
  }
};
let ROYAL = {};
setTimeout(() => {
  const J = makeInMemoryStore({
    'logger': Pino({
      'level': "silent"
    }).child({
      'level': "silent"
    })
  });
  try {
    J.readFromFile(__dirname + '/store.json');
  } catch (r) {
    console.log("CLIENT STORE ERROR:\n", r);
  }
  require("events").EventEmitter.defaultMaxListeners = 0x3e8;
  async function F() {
    let G = __dirname + '/assets/ROYAL.jpg';
    try {
      let S = await getBuffer(THUMB_IMAGE);
      G = __dirname + '/assets/SocialLogo.png';
      await writeFile(G, S);
    } catch (T) {
      G = __dirname + '/assets/ROYAL.jpg';
    }
    global.log0 = fs.readFileSync(G);
    const {
      state: z,
      saveCreds: g
    } = await useMultiFileAuthState(__dirname + '/Suhail_Baileys/');
    let n = ROYALilMDConnect({
      'logger': Pino({
        'level': 'silent'
      }).child({
        'level': 'silent'
      }),
      'printQRInTerminal': true,
      'browser': ["Chrome (Linux)", '', ''],
      'fireInitQueries': true,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'auth': z,
      'getMessage': async B => {
        if (J) {
          const A = await J.loadMessage(B.remoteJid, B.id, undefined);
          return A.message || undefined;
        }
        return {
          'conversation': "I'm ROYAL-MD!"
        };
      }
    });
    J.bind(n.ev);
    setInterval(() => {
      try {
        J.writeToFile(__dirname + "/store.json");
      } catch (B) {
        console.log("CLIENT STORE ERROR:\n", B);
      }
    }, 10000);
    n.ev.on("call", async B => {
      let A = await callsg(n, JSON.parse(JSON.stringify(B[0x0])));
      events.commands.map(async h => {
        if (h.call === "offer" && A.status === "offer") {
          try {
            h["function"](A, {
              'store': J,
              'Void': n
            });
          } catch (X) {
            console.error("[CALL ERROR] ", X);
          }
        }
        if (h.call === 'accept' && A.status === 'accept') {
          try {
            h["function"](A, {
              'store': J,
              'Void': n
            });
          } catch (w) {
            console.error("[CALL ACCEPT ERROR] ", w);
          }
        }
        if (h.call === "call" || h.call === 'on' || h.call === 'all') {
          try {
            h["function"](A, {
              'store': J,
              'Void': n
            });
          } catch (C) {
            console.error("[CALL ERROR] ", C);
          }
        }
      });
    });
    n.ev.on("presence.update", async B => {});
    n.ev.on('ROYALMD', async B => {
      try {
        const X = await J.loadMessage(key.remoteJid, key.id);
        if (X) {
          try {} catch (C) {
            console.error("Error deleting message:", C);
          }
        }
        try {} catch (U) {
          console.log(U);
        }
      } catch (d) {}
    });
    let R = {};
    let p = 0x0;
    var a = false;
    let s = {};
    let O = {};
    n.ev.on("messages.upsert", async B => {
      if (!global.SmdOfficial || global.SmdOfficial !== "yes") {
        return;
      }
      a = n.decodeJid(n.user.id);
      const A = B.messages[0x0];
      try {
        A.message = Object.keys(A.message || {})[0x0] === "ephemeralMessage" ? A.message.ephemeralMessage.message : A.message;
      } catch (C) {
        console.log("messages.upsert  : ", A, "\n\nERROR", C);
      }
      try {
        let m = await smsg(n, JSON.parse(JSON.stringify(A)), J, true);
        if (!m.message) {
          return;
        }
        var {
          body: h
        } = m;
        var X = m.isCreator;
        var w = typeof m.text == "string" ? m.text.trim() : false;
        if (w && h[0x1] && h[0x1] == " ") {
          h = h[0x0] + h.slice(0x2);
        }
        let d = false;
        let L = false;
        if (w && Config.HANDLERS.toLowerCase().includes('null')) {
          d = true;
          L = h.split(" ")[0x0].toLowerCase() || false;
        } else if (w && !Config.HANDLERS.toLowerCase().includes("null")) {
          d = h && prefixRegex.test(h[0x0]) || a.split('@')[0x0] !== "923184474176" && m.isROYAL && h[0x0] == ',';
          L = d ? prefa ? h.trim().split(" ")[0x0].toLowerCase() : h.slice(0x1).trim().split(" ")[0x0].toLowerCase() : false;
        } else {
          d = false;
        }
        let P = L ? L.trim() : '';
        if (P && global.setCmdAlias[P] !== undefined) {
          L = global.setCmdAlias[P];
          d = true;
        } else if (m.mtype == 'stickerMessage') {
          P = "sticker-" + m.msg.fileSha256;
          if (global.setCmdAlias[P]) {
            L = global.setCmdAlias[P];
            d = true;
          }
        }
        const H = ['120363025246125888@g.us', ...global.blockJids.split(',')];
        const y = ["null", ...global.allowJids.split(',')];
        if (H.includes(m.chat) && !m.isROYAL) {
          return;
        }
        if (d && (m.isBaileys || !X && Config.WORKTYPE === 'private' && !y.includes(m.chat))) {
          d = false;
        }
        const I = m.body ? h.trim().split(/ +/).slice(0x1) : [];
        if (!X && disablepm === "true" && d && !m.isGroup) {
          d = false;
        }
        ROYAL.bot = n;
        if (d) {
          let N = events.commands.find(l => l.pattern === L) || events.commands.find(l => l.alias && l.alias.includes(L));
          if (N?.['fromMe'] && !m.fromMe && !X) {
            N = false;
            return m.reply(tlang().owner);
          }
          if (m.isGroup && N && L !== "bot") {
            let l = s[m.chat] || {};
            if (l && l.botenable === "false") {
              N = false;
            }
            if (N && l) {
              let Z = N.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              let K = new RegExp("\\b" + Z + "\\b");
              if (l.disablecmds !== "false" && K.test(l.disablecmds)) {
                N = false;
              }
            }
          }
          if (!X && N) {
            try {
              let V = O[m.sender] || {
                'ban': "false"
              };
              if (V.ban === "true") {
                N = false;
                m.reply("*Hey " + m.senderName.split("\n").join("  ") + ",*\n_You are banned from using commands._");
              }
            } catch (v) {
              console.log("checkban.ban", v);
            }
          }
          if (N) {
            if (N.react) {
              m.react(N.react);
            }
            let Q = m.body ? h.trim().split(/ +/).slice(0x1).join(" ") : '';
            let M = N.pattern;
            m.cmd = M;
            try {
              N['function'](m, Q, {
                'cmd': M,
                'text': Q,
                'body': h,
                'args': I,
                'cmdName': L,
                'isCreator': X,
                'smd': M,
                'botNumber': a,
                'budy': w,
                'store': J,
                'ROYAL': ROYAL,
                'Void': n
              });
            } catch (q) {
              console.error("[ERROR] ", q);
            }
          } else {
            d = false;
            const j = events.commands.find(t => t.category === L) || false;
            if (j) {
              const t = {};
              let Y = '';
              events.commands.map(async (f0, f1) => {
                if (f0.dontAddCommandList === false && f0.pattern !== undefined) {
                  if (!t[f0.category]) {
                    t[f0.category] = [];
                  }
                  t[f0.category].push(f0.pattern);
                }
              });
              for (const f0 in t) {
                if (L == f0.toLowerCase()) {
                  Y = "┌───〈 *" + f0.toLowerCase() + " menu*  〉───◆\n│╭─────────────···▸\n┴│▸\n";
                  for (const f1 of t[f0]) {
                    Y += "⬡│▸ " + f1 + "\n";
                  }
                  Y += "┬│▸\n│╰────────────···▸▸\n└───────────────···▸";
                  break;
                }
              }
              n.sendUi(m.jid, {
                'caption': tiny(Y)
              });
            }
          }
        }
        text = m.body;
        let D = {
          'body': h,
          'mek': A,
          'text': text,
          'args': I,
          'botNumber': a,
          'isCreator': X,
          'icmd': d,
          'store': J,
          'budy': w,
          'ROYAL': ROYAL,
          'Void': n,
          'proto': proto
        };
        events.commands.map(async f2 => {
          if (h && f2.on === 'body' || f2.on === "main") {
            try {
              f2["function"](m, h, D);
            } catch (f3) {
              console.error("[ERROR] ", f3);
            }
          } else {
            if (m.text && f2.on === 'text' && ['text', "txt", 'true', "smd", "haseeb"].includes(f2.quoted || f2.reply || f2.reply_message || "dafa hoja") && m.quoted && m.quoted.text) {
              try {
                f2["function"](m, h, D);
              } catch (f4) {
                console.error("[ERROR] ", f4);
              }
            } else {
              if (m.text && f2.on === 'text') {
                try {
                  f2["function"](m, h, D);
                } catch (f5) {
                  console.error("[ERROR] ", f5);
                }
              } else {
                if ((f2.on === "image" || f2.on === 'photo') && m.mtype === "imageMessage") {
                  try {
                    f2["function"](m, h, D);
                  } catch (f6) {
                    console.error("[ERROR] ", f6);
                  }
                } else {
                  if ((f2.on === 'video' || f2.on === "mp4") && m.mtype === "videoMessage") {
                    try {
                      f2["function"](m, h, D);
                    } catch (f7) {
                      console.error("[ERROR] ", f7);
                    }
                  } else {
                    if (f2.on === "sticker" && m.mtype === "stickerMessage") {
                      try {
                        f2["function"](m, h, D);
                      } catch (f8) {
                        console.error("[ERROR] ", f8);
                      }
                    } else {
                      if (f2.on === "delete" && m.mtype == "protocolMessage" && m.msg.type === "REVOKE") {
                        try {
                          f2["function"](m, h, D);
                        } catch (f9) {
                          console.error("[ERROR] ", f9);
                        }
                      } else {
                        if (f2.on === "viewonce" && (m.viewOnce || A.message.viewOnceMessageV2)) {
                          try {
                            f2['function'](m, h, D);
                          } catch (ff) {
                            console.error("[ERROR] ", ff);
                          }
                        } else {
                          if (f2.on === "poll" && m.mtype.toLowerCase().includes("poll")) {
                            try {
                              f2["function"](m, h, D);
                            } catch (fk) {
                              console.error("[ERROR] ", fk);
                            }
                          } else {
                            if (f2.on === 'quoted' && m.quoted) {
                              try {
                                f2["function"](m, h, D);
                              } catch (fb) {
                                console.error("[ERROR] ", fb);
                              }
                            } else {
                              if (f2.on === "text" && ["text", "txt", 'true', "smd", "ROYAL"].includes(f2.quoted || f2.reply || f2.reply_message || "dafa hoja") && m.quoted && m.quoted.text) {
                                try {
                                  f2["function"](m, h, D);
                                } catch (fu) {
                                  console.error("[ERROR] ", fu);
                                }
                              } else {
                                if (['status', "story"].includes(f2.on) && (A.key.remoteJid === 'status@broadcast' || m.jid === "status@broadcast")) {
                                  try {
                                    f2["function"](m, h, D);
                                  } catch (fJ) {
                                    console.error("[ERROR] ", fJ);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        });
        try {
          s[m.chat] = (await groupdb.findOne({
            'id': m.chat
          })) || (await groupdb["new"]({
            'id': m.chat,
            'botenable': m.chat === "120363023983262391@g.us" ? "false" : "true"
          }));
          O[m.sender] = (await userdb.findOne({
            'id': m.sender
          })) || (await userdb["new"]({
            'id': m.sender,
            'name': m.pushName || "Unknown"
          }));
        } catch (f2) {
          main();
        }
        try {
          async function f3(f6, f7, f8 = '') {
            let [f9, ff] = f6.split(':').map(Number);
            var fk = f8 === 'mute' ? 'announcement' : f8 === "unmute" ? "not_announcement" : '';
            if (isNaN(f9) || isNaN(ff) || f9 < 0x0 || f9 >= 0x18 || ff < 0x0 || ff >= 0x3c || !fk) {
              return;
            }
            if (R[f7] && R[f7][f8] === f6) {
              return;
            } else {
              R[f7] = {
                [f8]: f6
              };
            }
            console.log("[GROUP] : " + f7 + "\n[SET AUTO " + f8.toUpperCase() + " AT] : " + f6 + " ");
            let fb = require("node-cron");
            fb.schedule(ff + " " + f9 + " * * *", () => {
              (async () => {
                try {
                  return await n.groupSettingUpdate(f7, fk);
                } catch (fu) {
                  return fu;
                }
              })();
            }, {
              'scheduled': true,
              'timezone': global.timezone || "aisa/karachi"
            });
          }
          async function f4() {
            let f6 = await groupdb.find({});
            for (let f7 = 0x0; f7 < f6.length; f7++) {
              if (!f6[f7].mute || !f6[f7].id.includes("@g.us") || f6[f7].mute === "false" || f6[f7].mute === "true") {
                continue;
              }
              await f3(f6[f7].mute, f6[f7].id, "mute");
            }
          }
          async function f5() {
            let f6 = await groupdb.find({});
            for (let f7 = 0x0; f7 < f6.length; f7++) {
              if (!f6[f7].unmute || !f6[f7].id.includes("@g.us") || f6[f7].unmute === 'false' || f6[f7].unmute === 'true') {
                continue;
              }
              await f3(f6[f7].unmute, f6[f7].id, "unmute");
            }
          }
          if (p < 0x2) {
            f4();
            f5();
            p += 0x1;
            console.log("AUTO MUTE & UNMUTE TIMER CHECKED : ", p, " TIME");
          }
        } catch (f6) {
          console.log("ERROR IN AUTO MUTE_UNMUTE\n", f6);
        }
        if (isMongodb) {}
      } catch (f7) {
        console.log("client.js --------- messages.upsert \n", f7);
      }
    });
    n.ev.on("group-participants.update", async B => {
      console.log({
        'anu': B
      });
      let A = await groupsg(n, JSON.parse(JSON.stringify(B)), true);
      if (!A || !A.isGroup) {
        return;
      }
      events.commands.map(async h => {
        if (A.status === "add" && h.group === "add") {
          try {
            h['function'](A, {
              'store': J,
              'Void': n
            });
          } catch (X) {
            console.error("[GROUP PARTICEPENTS ADD ERROR] ", X);
          }
        }
        if (A.status === "remove" && h.group === "remove") {
          try {
            h["function"](A, {
              'store': J,
              'Void': n
            });
          } catch (w) {
            console.error("[GROUP PARTICEPENTS REMOVE ERROR] ", w);
          }
        }
        if (A.status === "demote" && h.group === "demote") {
          try {
            h["function"](A, {
              'store': J,
              'Void': n
            });
          } catch (C) {
            console.error("[GROUP PARTICEPENTS DEMOTE ERROR] ", C);
          }
        }
        if (A.status === "promote" && h.group === 'promote') {
          try {
            h['function'](A, {
              'store': J,
              'Void': n
            });
          } catch (m) {
            console.error("[GROUP PARTICEPENTS PROMOTE ERROR] ", m);
          }
        }
        if (h.group === 'on' || h.group === "group" || h.group === "main" || h.group === 'all') {
          try {
            h["function"](A, {
              'store': J,
              'Void': n
            });
          } catch (U) {
            console.error("[GROUP PARTICEPENTS PROMOTE ERROR] ", U);
          }
        }
      });
      return;
    });
    n.lastStatus = async () => {
      console.log("last_status :", last_status);
      return last_status;
    };
    n.decodeJid = B => {
      if (!B) {
        return B;
      }
      if (/:\d+@/gi.test(B)) {
        let A = jidDecode(B) || {};
        return A.user && A.server && A.user + '@' + A.server || B;
      } else {
        return B;
      }
    };
    n.ev.on('contacts.upsert', B => {
      for (const A of B) {
        if (J.contacts[A.id]) {
          Object.assign(J.contacts[A.id], A);
        } else {
          J.contacts[A.id] = A;
        }
      }
    });
    n.ev.on('contacts.update', async B => {
      for (let A of B) {
        let h = n.decodeJid(A.id);
        if (J && J.contacts) {
          J.contacts[h] = {
            'id': h,
            'name': A.notify
          };
        }
      }
    });
    n.getName = (B, A = false) => {
      let h = n.decodeJid(B);
      let X;
      let w = '+' + B.replace("@s.whatsapp.net", '');
      if (h.endsWith("@g.us")) {
        return new Promise(async C => {
          X = J.contacts[h] || {};
          if (!(X.name?.["notify"] || X.subject)) {
            X = (await n.groupMetadata(h)) || {};
          }
          C(X.subject || X.name || w);
        });
      } else {
        X = h === '0@s.whatsapp.net' ? {
          'id': h,
          'name': "WhatsApp"
        } : h === n.decodeJid(n.user.id) ? n.user : J.contacts[h] || {};
      }
      if (X.name || X.subject || X.verifiedName) {
        return X.name || X.subject || X.verifiedName || w;
      } else {
        return userdb.findOne({
          'id': h
        }).then(C => C.name || w)['catch'](C => {
          w;
        });
      }
    };
    n.sendContact = async (B, A, h = '', X = {}) => {
      let w = [];
      for (let C of A) {
        w.push({
          'displayName': await n.getName(C + "@s.whatsapp.net"),
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await n.getName(C + "@s.whatsapp.net")) + "\nFN:" + global.OwnerName + "\nitem1.TEL;waid=" + C + ':' + C + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + global.email + "\nitem2.X-ABLabel:GitHub\nitem3.URL:" + global.github + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + global.location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
        });
      }
      n.sendMessage(B, {
        'contacts': {
          'displayName': w.length + " Contact",
          'contacts': w
        },
        ...X
      }, {
        'quoted': h
      });
    };
    n.setStatus = B => {
      n.query({
        'tag': 'iq',
        'attrs': {
          'to': '@s.whatsapp.net',
          'type': "set",
          'xmlns': "status"
        },
        'content': [{
          'tag': 'status',
          'attrs': {},
          'content': Buffer.from(B, "utf-8")
        }]
      });
      return B;
    };
    n.serializeM = B => smsg(n, B, J, false);
    n.ev.on("connection.update", async B => {
      if (C) {
        try {
          var m = require("qrcode");
          m.toString(C, function (U, d) {
            if (U) {
              console.log(U);
            }
            console.log(d);
          });
        } catch (U) {}
      }
      if (h === "connecting") {
        console.log("ℹ️ Connecting to WhatsApp!");
      }
      if (h === 'open') {
        if (/true|ok|sure|yes/gi.test(global.flush) || !n.authState.creds?.["myAppStateKeyId"]) {
          console.warn("Flushing SESSION_ID" + (n.authState.creds?.["myAppStateKeyId"] ? '' : " B'Coz *myAppStateKeyId Missing") + '!');
        }
        const d = n.decodeJid(n.user.id);
        if (!isMongodb && !sqldb) {
          main();
        }
        console.log("✅ Whatsapp Login Successful!");
        try {
          let H = false;
          try {
            H = (await bot_.findOne({
              'id': "bot_" + d
            })) || (await bot_["new"]({
              'id': 'bot_' + d
            }));
          } catch {
            H = false;
          }
          let y = [];
          let I = {};
          let D = {};
          try {
            let {
              data: N
            } = await axios.get("https://gist.github.com/chhaseeb47/fdb1b3596067ae5c3c2ab711afb9042f/raw");
            I = N.plugins;
            y = N.names;
            D = N.extension && typeof N.extension === "object" ? N.extension : {};
          } catch (l) {
            I = {};
          }
          y = !y || !y[0x0] ? [] : y;
          if (H && H.plugins) {
            console.log("⏳ Checking External Plugins.!!");
            I = {
              ...I,
              ...H.plugins
            };
          }
          if (I) {
            for (const K in I) {
              try {
                let {
                  data: V
                } = await axios.get(I[K]);
                if (V) {
                  let v = D[K] && [".js", '.smd', ".haseeb"].includes(D[K]) ? D[K] : '.smd';
                  if (!y.includes(K)) {
                    console.log(" " + K + " ✔️");
                  }
                  fs.writeFileSync(__dirname + "/../plugins/" + K + v, V, "utf8");
                }
              } catch (Q) {
                if (!y.includes(K)) {
                  console.log(" " + K + " ❌");
                }
              }
            }
            console.log("\n✅ External Plugins Installed!");
          }
        } catch (M) {
          console.log("❌ ERROR INSTALATION PLUGINS ", e);
        }
        fs.readdirSync(__dirname + "/../plugins").forEach(q => {
          if (q.includes("_Baileys") || q.includes("_MSGS")) {
            console.log("\nRENTBOTT's DATA DETECTED!", "\nUSER NUMBER :", q.replace("_MSGS", '').replace('_Baileys', ''), "\n\n");
          } else {
            if ([".js", ".smd", '.haseeb'].includes(path.extname(q).toLowerCase())) {
              try {
                require(__dirname + "/../plugins/" + q);
              } catch (j) {
                console.log("\n\n ❌Theres an error in '" + q + "' file ❌ \n\n", j);
              }
            }
          }
        });
        let L = "\nROYAL-MD Connected\n\n  Prefix  : [ " + (prefix ? prefix : "null") + " ]\n  Plugins : " + events.commands.length + "\n  Mode    : " + Config.WORKTYPE + "\n  Database: " + (isMongodb ? "MongoDb" : sqldb ? 'PostegreSql' : "JSON(no db)") + "\n";
        L += Math.floor(Math.random() * 0x5) == 0x1 ? "\n\nSUPPORT BY SUBSCRIBE\nyoutube.com/@mhmodsofc\n\n\n" : '';
        try {
          const q = require("../lib/scraper");
          let j = await q.syncgit();
          if (j.total !== 0x0 && Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY) {
            L += "\n𝗡𝗲𝘄 𝗨𝗽𝗱𝗮𝘁𝗲 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲\nRedeploy Bot as Soon as Possible!\n";
          }
        } catch {}
        console.log(L);
        if (!["true", 'log', "smd"].includes(global.MsgsInLog)) {
          console.log = () => {};
        }
        await n.sendMessage(d, {
          'text': "```" + ('' + L).trim() + '```'
        }, {
          'disappearingMessagesInChat': true,
          'ephemeralExpiration': 86400
        });
      }
      if (h === "close") {
        let t = new Boom(X?.['error'])?.["output"]["statusCode"];
        if (t === DisconnectReason.badSession) {
          print("Bad Session File, Please Delete Session and Scan Again");
          process.exit(0x0);
        } else {
          if (t === DisconnectReason.connectionClosed) {
            print("Connection closed, reconnecting....");
            F()["catch"](Y => console.log(Y));
          } else {
            if (t === DisconnectReason.connectionLost) {
              print("Connection Lost from Server, reconnecting...");
              F()["catch"](Y => console.log(Y));
            } else {
              if (t === DisconnectReason.connectionReplaced) {
                print("Connection Replaced, Please Close Current Session First");
                try {
                  process.send("reset");
                } catch (Y) {
                  print(Y);
                  process.exit(0x0);
                }
              } else {
                if (t === DisconnectReason.loggedOut) {
                  print("Device Logged Out, Please Scan Again And Run.");
                  process.exit(0x1);
                } else {
                  if (t === DisconnectReason.restartRequired) {
                    print("Restart Required, Restarting...");
                    F()['catch'](f0 => console.log(f0));
                  } else {
                    if (t === DisconnectReason.timedOut) {
                      print("Connection TimedOut, Reconnecting...");
                      F()["catch"](f0 => console.log(f0));
                    } else if (t === DisconnectReason.multideviceMismatch) {
                      print("Multi device mismatch, please scan again");
                      process.exit(0x0);
                    } else {
                      print("Connection closed with bot. Please put New Session ID again.");
                      print(t);
                      process.exit(0x0);
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
    n.ev.on("creds.update", g);
    n.messageId = (B = 0x8, A = 'ROYALMD') => {
      for (let X = 0x0; X < B; X++) {
        const w = Math.floor(Math.random() * "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".length);
        A += "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".charAt(w);
      }
      return A;
    };
    n.send5ButImg = async (B, A = '', h = '', X, w = [], C, m = {}) => {
      let U = await prepareWAMessageMedia({
        'image': X,
        'jpegThumbnail': C
      }, {
        'upload': n.waUploadToServer
      });
      var d = generateWAMessageFromContent(B, proto.Message.fromObject({
        'templateMessage': {
          'hydratedTemplate': {
            'imageMessage': U.imageMessage,
            'hydratedContentText': A,
            'hydratedFooterText': h,
            'hydratedButtons': w
          }
        }
      }), m);
      n.relayMessage(B, d.message, {
        'messageId': n.messageId()
      });
    };
    n.sendButtonText = (B, A = [], h, X, w = '', C = {}) => {
      let m = {
        'text': h,
        'footer': X,
        'buttons': A,
        'headerType': 0x2,
        ...C
      };
      n.sendMessage(B, m, {
        'quoted': w,
        ...C
      });
    };
    n.sendText = (B, A, h = '', X) => n.sendMessage(B, {
      'text': A,
      ...X
    }, {
      'quoted': h
    });
    n.sendImage = async (B, A, h = '', X = '', w) => {
      let C = Buffer.isBuffer(A) ? A : /^data:.*?\/.*?;base64,/i.test(A) ? Buffer.from(A.split`,`[0x1], "base64") : /^https?:\/\//.test(A) ? await await getBuffer(A) : fs.existsSync(A) ? fs.readFileSync(A) : Buffer.alloc(0x0);
      return await n.sendMessage(B, {
        'image': C,
        'caption': h,
        ...w
      }, {
        'quoted': X
      });
    };
    n.sendTextWithMentions = async (B, A, h, X = {}) => n.sendMessage(B, {
      'text': A,
      'contextInfo': {
        'mentionedJid': [...A.matchAll(/@(\d{0,16})/g)].map(w => w[0x1] + "@s.whatsapp.net")
      },
      ...X
    }, {
      'quoted': h
    });
    n.sendImageAsSticker = async (B, A, h = {}) => {
      let X;
      if (h && (h.packname || h.author)) {
        X = await writeExifImg(A, h);
      } else {
        X = await imageToWebp(A);
      }
      await n.sendMessage(B, {
        'sticker': {
          'url': X
        },
        ...h
      }, h);
    };
    n.sendVideoAsSticker = async (B, A, h = {}) => {
      let X;
      if (h && (h.packname || h.author)) {
        X = await writeExifVid(A, h);
      } else {
        X = await videoToWebp(A);
      }
      await n.sendMessage(B, {
        'sticker': {
          'url': X
        },
        ...h
      }, h);
    };
    n.sendMedia = async (B, A, h = '', X = '', w = '', C = {}) => {
      if (L && L.status !== 0xc8 || file.length <= 0x10000) {
        try {
          throw {
            'json': JSON.parse(file.toString())
          };
        } catch (N) {
          if (N.json) {
            throw N.json;
          }
        }
      }
      let y = '';
      let I = U;
      let D = H;
      if (C.asDocument) {
        y = "document";
      }
      if (C.asSticker || /webp/.test(U)) {
        let {
          writeExif: l
        } = require('./exif');
        let Z = {
          'mimetype': U,
          'data': P
        };
        D = await l(Z, {
          'packname': C.packname ? C.packname : Config.packname,
          'author': C.author ? C.author : Config.author,
          'categories': C.categories ? C.categories : []
        });
        await fs.promises.unlink(H);
        y = "sticker";
        I = "image/webp";
      } else {
        if (/image/.test(U)) {
          y = "image";
        } else {
          if (/video/.test(U)) {
            y = 'video';
          } else {
            if (/audio/.test(U)) {
              y = "audio";
            } else {
              y = "document";
            }
          }
        }
      }
      await n.sendMessage(B, {
        [y]: {
          'url': D
        },
        'caption': X,
        'mimetype': I,
        'fileName': h,
        ...C
      }, {
        'quoted': w,
        ...C
      });
      return fs.promises.unlink(D);
    };
    n.downloadAndSaveMediaMessage = async (B, A = "null", h = true) => {
      let X = B.msg ? B.msg : B;
      let w = (B.msg || B).mimetype || '';
      let C = B.mtype ? B.mtype.replace(/Message/gi, '') : w.split('/')[0x0];
      const m = await downloadContentFromMessage(X, C);
      let U = Buffer.from([]);
      for await (const P of m) {
        U = Buffer.concat([U, P]);
      }
      let d = await FileType.fromBuffer(U);
      let L = "./temp/" + A + '.' + d.ext;
      await fs.writeFileSync(L, U);
      return L;
    };
    n.forward = async (B, A, h, X, w = true) => {
      try {
        let C = A.mtype;
        let m = {};
        console.log("Forward function Called and Type is : ", C);
        if (C == "conversation") {
          m = {
            'text': A.text,
            'contextInfo': h
          };
          for (let l of parsedJid(B)) {
            await n.sendMessage(l, m, {
              'quoted': X,
              'messageId': n.messageId()
            });
          }
          return;
        }
        let d = A.msg ? A.msg : A;
        let L = (A.msg || A).mimetype || '';
        let P = A.mtype ? A.mtype.replace(/Message/gi, '') : L.split('/')[0x0];
        const H = await downloadContentFromMessage(d, P);
        let y = Buffer.from([]);
        for await (const Z of H) {
          y = Buffer.concat([y, Z]);
        }
        let I = await FileType.fromBuffer(y);
        let D = await ('' + Math.floor(Math.random() * 0x2710) + I.ext);
        let N = './temp/' + D;
        await fs.writeFileSync(N, y);
        if (C == "videoMessage") {
          m = {
            'video': fs.readFileSync(N),
            'mimetype': A.mimetype,
            'caption': A.text,
            'contextInfo': h
          };
        } else {
          if (C == 'imageMessage') {
            m = {
              'image': fs.readFileSync(N),
              'mimetype': A.mimetype,
              'caption': A.text,
              'contextInfo': h
            };
          } else {
            if (C == "audioMessage") {
              m = {
                'audio': fs.readFileSync(N),
                'mimetype': A.mimetype,
                'seconds': 0xbebc74b,
                'ptt': true,
                'contextInfo': h
              };
            } else if (C == "documentWithCaptionMessage" || I == 'documentMessage') {
              m = {
                'document': fs.readFileSync(N),
                'mimetype': A.mimetype,
                'caption': A.text,
                'contextInfo': h
              };
            } else {
              fs.unlink(N, K => {
                if (K) {
                  console.error("Error deleting file:", K);
                } else {
                  console.log("File deleted successfully");
                }
              });
            }
          }
        }
        for (let K of parsedJid(B)) {
          try {
            await n.sendMessage(K, m, {
              'quoted': X,
              'messageId': n.messageId()
            });
          } catch (V) {}
        }
        return fs.unlink(N, v => {
          if (v) {
            console.error("Error deleting file:", v);
          } else {
            console.log("File deleted successfully");
          }
        });
      } catch (v) {
        console.log(v);
      }
    };
    n.downloadMediaMessage = async B => {
      let A = B.msg ? B.msg : B;
      let h = (B.msg || B).mimetype || '';
      let X = B.mtype ? B.mtype.replace(/Message/gi, '') : h.split('/')[0x0];
      const w = await downloadContentFromMessage(A, X);
      let C = Buffer.from([]);
      for await (const m of w) {
        C = Buffer.concat([C, m]);
      }
      return C;
    };
    n.forwardOrBroadCast2 = async (B, A, h = {}, X = '') => {
      try {
        let C = A.mtype;
        if (C === 'videoMessage' && X === "ptv") {
          A = {
            'ptvMessage': {
              ...A.msg
            }
          };
        }
        let m = {
          ...h,
          'contextInfo': {
            ...(h.contextInfo ? h.contextInfo : {}),
            ...(h.linkPreview ? {
              'linkPreview': {
                ...h.linkPreview
              }
            } : {}),
            ...(h.quoted && h.quoted.message ? {
              'quotedMessage': {
                ...(h.quoted?.["message"] || {})
              }
            } : {})
          }
        };
        var w = A.message ? A.message : A;
        let U = C ? C : Object.keys(w)[0x0];
        w = {
          ...m,
          ...w
        };
        const d = await generateWAMessageFromContent(B, w, h ? {
          ...(U == "conversation" ? {
            'conversation': w[U]
          } : w[U]),
          ...m,
          'contextInfo': {
            ...(w[U]?.["contextInfo"] || {}),
            ...m.contextInfo
          }
        } : {});
        await n.relayMessage(B, d.message, {
          'messageId': n.messageId()
        });
        return d;
      } catch {}
    };
    n.forwardOrBroadCast = async (B, A, h = {}, X = '') => {
      try {
        let C = A.mtype;
        if (C === "videoMessage" && X === "ptv") {
          A = {
            'ptvMessage': {
              ...A.msg
            }
          };
        }
        h.contextInfo = {
          ...h.contextInfo
        } || {};
        var w = A.message ? A.message : A;
        let d = C ? C : Object.keys(w)[0x0];
        const L = await generateWAMessageFromContent(B, w, h ? {
          ...w[d],
          ...h,
          ...(h.contextInfo ? {
            'contextInfo': {
              ...w[d].contextInfo,
              ...h.contextInfo,
              ...(h.quoted ? {
                'quotedMessage': {
                  ...h.quoted
                }
              } : {})
            }
          } : {})
        } : {});
        await n.relayMessage(B, L.message, {
          'messageId': n.messageId()
        });
        return L;
      } catch (P) {
        console.log(P);
      }
    };
    n.copyNForward = async (B, A, h = false, X = {}) => {
      try {
        let w;
        if (X.readViewOnce) {
          A.message = A.message && A.message.ephemeralMessage && A.message.ephemeralMessage.message ? A.message.ephemeralMessage.message : A.message || undefined;
          w = Object.keys(A.message.viewOnceMessage.message)[0x0];
          delete (A.message && A.message.ignore ? A.message.ignore : A.message || undefined);
          delete A.message.viewOnceMessage.message[w].viewOnce;
          A.message = {
            ...A.message.viewOnceMessage.message
          };
        }
        let C = Object.keys(A.message)[0x0];
        try {
          A.key.fromMe = true;
        } catch (P) {}
        let m = await generateForwardMessageContent(A, h);
        let U = Object.keys(m)[0x0];
        let d = {};
        if (C != "conversation") {
          d = A.message[C].contextInfo;
        }
        m[U].contextInfo = {
          ...d,
          ...m[U].contextInfo
        };
        const L = await generateWAMessageFromContent(B, m, X ? {
          ...m[U],
          ...X,
          ...(X.contextInfo ? {
            'contextInfo': {
              ...m[U].contextInfo,
              ...X.contextInfo
            }
          } : {})
        } : {});
        await n.relayMessage(B, L.message, {
          'messageId': n.messageId()
        });
        return L;
      } catch (H) {
        console.log(H);
      }
    };
    n.sendFileUrl = async (B, A, h = '', X = '', w = {
      'author': "ROYAL-Md"
    }, C = '') => {
      try {
        let L = await axios.head(A);
        let P = L?.["headers"]["content-type"] || '';
        let H = P.split('/')[0x0];
        let y = false;
        if (P.split('/')[0x1] === "gif" || C === "gif") {
          y = {
            'video': {
              'url': A
            },
            'caption': h,
            'gifPlayback': true,
            ...w
          };
        } else {
          if (P.split('/')[0x1] === "webp" || C === 'sticker') {
            y = {
              'sticker': {
                'url': A
              },
              ...w
            };
          } else {
            if (H === "image" || C === 'image') {
              y = {
                'image': {
                  'url': A
                },
                'caption': h,
                ...w,
                'mimetype': "image/jpeg"
              };
            } else {
              if (H === "video" || C === "video") {
                y = {
                  'video': {
                    'url': A
                  },
                  'caption': h,
                  'mimetype': "video/mp4",
                  ...w
                };
              } else {
                if (H === 'audio' || C === "audio") {
                  y = {
                    'audio': {
                      'url': A
                    },
                    'mimetype': "audio/mpeg",
                    ...w
                  };
                } else if (P == "application/pdf") {
                  y = {
                    'document': {
                      'url': A
                    },
                    'mimetype': 'application/pdf',
                    'caption': h,
                    ...w
                  };
                }
              }
            }
          }
        }
        if (y) {
          try {
            return await n.sendMessage(B, y, {
              'quoted': X
            });
          } catch {}
          ;
        }
        try {
          var m = L?.["headers"]['content-disposition']?.["split"]("=\"")[0x1]?.['split']("\"")[0x0] || "file";
          if (m) {
            const D = [".jpg", ".jpeg", '.png'];
            const N = [".mp4", ".avi", ".mov", ".mkv", ".gif", ".m4v", ".webp"];
            var U = m.substring(m.lastIndexOf('.'))?.["toLowerCase"]() || "nillll";
            var d;
            if (D.includes(U)) {
              d = "image/jpeg";
            } else if (N.includes(U)) {
              d = "video/mp4";
            }
            P = d ? d : P;
            let l = {
              'fileName': m || "file",
              'caption': h,
              ...w,
              'mimetype': P
            };
            return await n.sendMessage(B, {
              'document': {
                'url': A
              },
              ...l
            }, {
              'quoted': X
            });
          }
        } catch (Z) {}
        let I = {
          'fileName': m ? m : "file",
          'caption': h,
          ...w,
          'mimetype': P
        };
        return await n.sendMessage(B, {
          'document': {
            'url': A
          },
          ...I
        }, {
          'quoted': X
        });
      } catch (K) {
        console.log("Erorr in client.sendFileUrl() : ", K);
      }
    };
    n.sendFromUrl = n.sendFileUrl;
    const o = {};
    let x = [];
    n.sendUi = async (B, A = {}, h = '', X = '', w = '') => {
      let C = {};
      try {
        const U = ['.jpg', ".jpeg", ".png"];
        const d = ['.mp4', ".avi", ".mov", '.mkv', ".gif", ".m4v", '.webp'];
        let L = video = false;
        if (!x || !x[0x0]) {
          x = global.userImages ? global.userImages.split(',') : [await botpic()];
          x = x.filter(I => I.trim() !== '');
        }
        let P = X && w ? w : x[Math.floor(Math.random() * x.length)];
        if (!o[P]) {
          const I = P.substring(P.lastIndexOf('.')).toLowerCase();
          if (U.includes(I)) {
            L = true;
          }
          if (d.includes(I)) {
            video = true;
          }
          o[P] = {
            'image': L,
            'video': video
          };
        }
        h = h && h.quoted?.['key'] ? h.quoted : h || '';
        let H;
        if (!w && ["text", "txt", "nothing", "smd", "ROYAL"].includes(global.userImages) || X == 'text') {
          H = {
            'text': A.text || A.caption,
            ...A
          };
        } else {
          if (X == "image" || o[P]?.['image']) {
            H = {
              'image': {
                'url': P
              },
              ...A,
              'mimetype': "image/jpeg"
            };
          } else if (X == "video" || o[P]?.["video"]) {
            H = {
              'video': {
                'url': P
              },
              ...A,
              'mimetype': "video/mp4",
              'gifPlayback': true,
              'height': 0x112,
              'width': 0x21c
            };
          }
        }
        C = {
          ...(await n.contextInfo(Config.botname, h && h.senderName ? h.senderName : Config.ownername))
        };
        if (H) {
          return n.sendMessage(B, {
            'contextInfo': C,
            ...H
          }, {
            'quoted': h
          });
        }
      } catch (D) {
        console.log("erorr in userImages() : ", D);
      }
      try {
        return n.sendMessage(B, {
          'image': {
            'url': await botpic()
          },
          'contextInfo': C,
          ...A
        });
      } catch {
        return n.sendMessage(B, {
          'text': A.text || A.caption,
          ...A
        });
      }
    };
    n.contextInfo = async (B = Config.botname, A = Config.ownername, h = log0, X = 0x1, w = gurl, C = false) => {
      try {
        let m = C ? C : global.style;
        if (m >= 0x5) {
          return {
            'externalAdReply': {
              'title': B,
              'body': A,
              'renderLargerThumbnail': true,
              'showAdAttribution': true,
              'thumbnail': h,
              'mediaType': X || 0x1,
              'mediaUrl': w,
              'sourceUrl': w
            }
          };
        } else {
          if (m == 0x4) {
            return {
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'externalAdReply': {
                'title': B,
                'body': A,
                'renderLargerThumbnail': true,
                'thumbnail': h,
                'mediaType': X || 0x1,
                'mediaUrl': w,
                'sourceUrl': w
              }
            };
          } else {
            if (m == 0x3) {
              return {
                'externalAdReply': {
                  'title': B,
                  'body': A,
                  'renderLargerThumbnail': true,
                  'thumbnail': h,
                  'mediaType': X || 0x1,
                  'mediaUrl': w,
                  'sourceUrl': w
                }
              };
            } else {
              if (m == 0x2) {
                return {
                  'externalAdReply': {
                    'title': B,
                    'body': A,
                    'thumbnail': h,
                    'showAdAttribution': true,
                    'mediaType': 0x1,
                    'mediaUrl': w,
                    'sourceUrl': w
                  }
                };
              } else {
                if (m == 0x1) {
                  return {
                    'externalAdReply': {
                      'title': B,
                      'body': A,
                      'thumbnail': h,
                      'mediaType': 0x1,
                      'mediaUrl': w,
                      'sourceUrl': w
                    }
                  };
                } else {
                  return {};
                }
              }
            }
          }
        }
      } catch (U) {
        console.log("error in client.contextInfo() : ", U);
        return {};
      }
    };
    n.cMod = (B, A, h = '', X = n.user.id, w = {}) => {
      let C = Object.keys(A.message)[0x0];
      let m = C === 'ephemeralMessage';
      if (m) {
        C = Object.keys(A.message.ephemeralMessage.message)[0x0];
      }
      let U = m ? A.message.ephemeralMessage.message : A.message;
      let d = U[C];
      if (typeof d === "string") {
        U[C] = h || d;
      } else {
        if (d.caption) {
          d.caption = h || d.caption;
        } else {
          if (d.text) {
            d.text = h || d.text;
          }
        }
      }
      if (typeof d !== "string") {
        U[C] = {
          ...d,
          ...w
        };
      }
      if (A.key.participant) {
        X = A.key.participant = X || A.key.participant;
      } else {
        if (A.key.participant) {
          X = A.key.participant = X || A.key.participant;
        }
      }
      if (A.key.remoteJid.includes("@s.whatsapp.net")) {
        X = X || A.key.remoteJid;
      } else {
        if (A.key.remoteJid.includes('@broadcast')) {
          X = X || A.key.remoteJid;
        }
      }
      A.key.remoteJid = B;
      A.key.fromMe = X === n.user.id;
      return proto.WebMessageInfo.fromObject(A);
    };
    n.getFile = async (B, A) => {
      let h;
      let X = Buffer.isBuffer(B) ? B : /^data:.*?\/.*?;base64,/i.test(B) ? Buffer.from(B.split`,`[0x1], "base64") : /^https?:\/\//.test(B) ? await (h = await getBuffer(B)) : fs.existsSync(B) ? (C = B, fs.readFileSync(B)) : typeof B === "string" ? B : Buffer.alloc(0x0);
      let w = (await FileType.fromBuffer(X)) || {
        'mime': 'application/octet-stream',
        'ext': ".bin"
      };
      let C = "./temp/null." + w.ext;
      if (X && A) {
        fs.promises.writeFile(C, X);
      }
      return {
        'res': h,
        'filename': C,
        'size': await getSizeMedia(X),
        ...w,
        'data': X
      };
    };
    n.sendFile = async (B, A, h, X = {
      'quoted': ''
    }, w = {}) => {
      let H = '';
      let y = L;
      let I = m;
      if (w.asDocument) {
        H = "document";
      }
      if (w.asSticker || /webp/.test(L)) {
        let {
          writeExif: D
        } = require("./exif.js");
        let N = {
          'mimetype': L,
          'data': P
        };
        I = await D(N, {
          'packname': Config.packname,
          'author': Config.packname,
          'categories': w.categories ? w.categories : []
        });
        await fs.promises.unlink(m);
        H = "sticker";
        y = "image/webp";
      } else {
        if (/image/.test(L)) {
          H = 'image';
        } else {
          if (/video/.test(L)) {
            H = "video";
          } else {
            if (/audio/.test(L)) {
              H = "audio";
            } else {
              H = 'document';
            }
          }
        }
      }
      await n.sendMessage(B, {
        [H]: {
          'url': I
        },
        'mimetype': y,
        'fileName': h,
        ...w
      }, {
        'quoted': X && X.quoted ? X.quoted : X,
        ...X
      });
      return fs.promises.unlink(I);
    };
    n.fakeMessage = async (B = "text", A = {}, h = "➬ ROYAL SER", X = {}) => {
      const w = [0x309, 0x0, 0x64, 0x1f4, 0x3e8, 0x3e7, 0x7e5];
      let C = {
        'id': n.messageId(),
        'fromMe': false,
        'participant': "0@s.whatsapp.net",
        'remoteJid': "status@broadcast",
        ...A
      };
      let m = {};
      if (B == "text" || B == "conservation" || !B) {
        m = {
          'conversation': h
        };
      } else {
        if (B == "order") {
          m = {
            'orderMessage': {
              'itemCount': w[Math.floor(0x8 * Math.random())],
              'status': 0x1,
              'surface': 0x1,
              'message': "❏ " + h,
              'orderTitle': 'live',
              'sellerJid': '923184474176@s.whatsapp.net'
            }
          };
        } else {
          if (B == 'contact') {
            m = {
              'contactMessage': {
                'displayName': '' + h,
                'jpegThumbnail': log0
              }
            };
          } else {
            if (B == 'image') {
              m = {
                'imageMessage': {
                  'jpegThumbnail': log0,
                  'caption': h
                }
              };
            } else if (B == "video") {
              m = {
                'videoMessage': {
                  'url': log0,
                  'caption': h,
                  'mimetype': 'video/mp4',
                  'fileLength': "4757228",
                  'seconds': 0x2c
                }
              };
            }
          }
        }
      }
      return {
        'key': {
          ...C
        },
        'message': {
          ...m,
          ...X
        }
      };
    };
    n.parseMention = async B => {
      return [...B.matchAll(/@([0-9]{5,16}|0)/g)].map(A => A[0x1] + '@s.whatsapp.net');
    };
    app.get("/chat", (B, A) => {
      let h = B.query.chat || B.query.jid || n.user.id || n.user.m || '';
      if (["all", "msg", 'total'].includes(h)) {
        return A.json({
          'chat': h,
          'conversation': JSON.stringify(J, null, 0x2)
        });
      }
      if (!h) {
        return A.json({
          'ERROR': "Chat Id parameter missing"
        });
      }
      h = n.decodeJid(h);
      const X = (J.messages[h] || J.messages[h + "@s.whatsapp.net"] || J.messages[h + "@g.us"])?.["array"] || false;
      if (!X) {
        return A.json({
          'chat': h,
          'Message': "no messages found in for given chat id!"
        });
      }
      A.json({
        'chat': h,
        'conversation': JSON.stringify(X, null, 0x2)
      });
    });
    return n;
  }
  F()["catch"](G => console.log(G));
}, 0x1388);
const html = "\n     <!DOCTYPE html>\n     <html>\n       <head>\n         <title>ROYAL-MD</title>\n         <script src=\"https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js\"></script>\n         <script>\n           setTimeout(() => {\n             confetti({\n               particleCount: 100,\n               spread: 70,\n               origin: { y: 0.6 },\n               disableForReducedMotion: true\n             });\n           }, 500);\n         </script>\n         <style>\n           @import url(\"https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css\");\n           @font-face {\n             font-family: \"neo-sans\";\n             src: url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n             font-style: normal;\n             font-weight: 700;\n           }\n           html {\n             font-family: neo-sans;\n             font-weight: 700;\n             font-size: calc(62rem / 16);\n           }\n           body {\n             background: white;\n           }\n           section {\n             border-radius: 1em;\n             padding: 1em;\n             position: absolute;\n             top: 50%;\n             left: 50%;\n             margin-right: -50%;\n             transform: translate(-50%, -50%);\n           }\n         </style>\n       </head>\n       <body>\n         <section>\n           Hello from \"MH MODS OFC\"!\n         </section>\n       </body> \n     </html>\n     ";
app.get('/', (J, c) => c.type("html").send("\n     <!DOCTYPE html>\n     <html>\n       <head>\n         <title>ROYAL-MD</title>\n         <script src=\"https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js\"></script>\n         <script>\n           setTimeout(() => {\n             confetti({\n               particleCount: 100,\n               spread: 70,\n               origin: { y: 0.6 },\n               disableForReducedMotion: true\n             });\n           }, 500);\n         </script>\n         <style>\n           @import url(\"https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css\");\n           @font-face {\n             font-family: \"neo-sans\";\n             src: url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n             font-style: normal;\n             font-weight: 700;\n           }\n           html {\n             font-family: neo-sans;\n             font-weight: 700;\n             font-size: calc(62rem / 16);\n           }\n           body {\n             background: white;\n           }\n           section {\n             border-radius: 1em;\n             padding: 1em;\n             position: absolute;\n             top: 50%;\n             left: 50%;\n             margin-right: -50%;\n             transform: translate(-50%, -50%);\n           }\n         </style>\n       </head>\n       <body>\n         <section>\n           Hello from \"MH MODS OFC\"!\n         </section>\n       </body> \n     </html>\n     "));
app.get("/ROYAL", (J, c) => c.type('html').send("\n     <!DOCTYPE html>\n     <html>\n       <head>\n         <title>ROYAL-MD</title>\n         <script src=\"https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js\"></script>\n         <script>\n           setTimeout(() => {\n             confetti({\n               particleCount: 100,\n               spread: 70,\n               origin: { y: 0.6 },\n               disableForReducedMotion: true\n             });\n           }, 500);\n         </script>\n         <style>\n           @import url(\"https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css\");\n           @font-face {\n             font-family: \"neo-sans\";\n             src: url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n             font-style: normal;\n             font-weight: 700;\n           }\n           html {\n             font-family: neo-sans;\n             font-weight: 700;\n             font-size: calc(62rem / 16);\n           }\n           body {\n             background: white;\n           }\n           section {\n             border-radius: 1em;\n             padding: 1em;\n             position: absolute;\n             top: 50%;\n             left: 50%;\n             margin-right: -50%;\n             transform: translate(-50%, -50%);\n           }\n         </style>\n       </head>\n       <body>\n         <section>\n           Hello from \"MH MODS OFC\"!\n         </section>\n       </body> \n     </html>\n     "));
let quickport = global.port ? global.port : Math.floor(Math.random() * 9000) + 0x3e8;
app.listen(quickport, () => console.log("ROYAL-MD Server listening on http://localhost:" + quickport + "/  "));
cron.schedule("*/5 * * * *", async () => {
  if (global.appUrl && /http/gi.test(global.appUrl)) {
    try {
      await axios.get(global.appUrl.trim());
    } catch (J) {
      console.log("APP URL NOT RESPOND\n", J.message || J);
    }
  }
});
function b() {
  const kF = ['connectionClosed', 'notify', '840CkMdUq', 'name', 'text', 'github', 'demote', 'charAt', "Error deleting message:", 'chat', "ROYAL-MD\n", 'pollUpdateMessageKey', 'aisa/karachi', './temp/null.', 'group-participants.update', 'remove', "Error deleting file:", 'join', "\n\nSUPPORT BY SUBSCRIBE\nyoutube.com/@mhmodsofc\n\n\n", 'exit', 'asSticker', '4757228', '.ROYAL', '/chat', 'packname', 'ephemeralMessage', 'viewOnceMessageV2', 'writeFileSync', 'group', '.jpeg', 'set', "function *\\( *\\)", 'author', 'stateObject', 'Debug', 'PId_', 'forwardOrBroadCast', 'WebMessageInfo', 'sendMedia', '4795070wwhbaR', 'presence.update', "Connection closed with bot. Please put New Session ID again.", '1163GMlQlB', 'video', 'sender', '/store.json', 'fromObject', 'util', "Connection Lost from Server, reconnecting...", 'order', 'gger', "🌍 Connected to the PostgreSQL.", 'EventEmitter', '17863688449@s.whatsapp.net', "[ERROR] ", 'contextInfo', 'setStatus', "Bad Session File, Please Delete Session and Scan Again", 'getPaste', 'includes', "Restart Required, Restarting...", 'mimetype', "✅ Whatsapp Login Successful!", " ✔️", 'true', '876vCtyzN', 'bot_', 'mp4', 'type', 'creds.update', 'empty', 'pushName', 'log0', '.bin', 'send5ButImg', '144YVCzBm', 'release', "EMPTY SESSION_ID FROM GURU SERVER\nPLEASE SCAN THE QR AGAIN\n\nERROR: ", 'writeFile', 'story', '28748jFWozl', 'counter', 'badSession', 'pastebin-js', 'messages', '120363023983262391@g.us', "while (true) {}", " TIME", "\nitem1.TEL;waid=", 'viewOnceMessage', 'OwnerName', 'parse', "\n  Mode    : ", '.jpg', 'ownername', 'split', 'conservation', "\n█▀▀▀█  █▀▀▀█  █    █ █▀▀█ █\n█   █  █   █  █    █ █  █ █\n█▄▄█   █   █  █▄▄▄▄█ █▄▄█ █\n█   █  █   █       █ █  █ █\n█    █ █▄▄▄█  █▄▄▄▄█ █  █ █▄▄█\n     𝗠𝗨𝗟𝗧𝗜𝗗𝗘𝗩𝗜𝗖𝗘 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗨𝗦𝗘𝗥 𝗕𝗢𝗧\n\n\n\n", "Could not connect with Mongodb.", 'main', ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD", 'test', 'input', 'sendContact', "dafa hoja", 'appUrl', 'concat', "CAN'T GET SESSION FROM PASTE ID\nERROR : ", 'all', 'head', 'json', "┌───〈 *", "Device Logged Out, Please Scan Again And Run.", 'sendFromUrl', 'array', 'linkPreview', "[GROUP PARTICEPENTS REMOVE ERROR] ", 'find', " ]\n  Plugins : ", 'documentWithCaptionMessage', 'writeToFile', 'mtype', 'poll', 'log', 'toString', 'offer', 'is ROYAL', 'random', 'messageId', 'apply', 'downloadMediaMessage', 'alias', "\\$&", 'loadMessage', 'fakeMessage', 'html', './exif.js', 'viewOnce', 'audioMessage', 'new', 'ECRgNok5kmfqqPofmC4NwFM8J6rx3qSO', 'categories', 'audio/mpeg', 'call', 'fromMe', '@whiskeysockets/baileys', 'pollUpdates', 'headers', 'verifiedName', '@hapi/boom', 'not_announcement', 'conversation', 'axios', 'utf8', 'https://pastebin.guruapi.tech/pastes?action=getpaste&id=', 'botname', 'substring', 'utf-8', 'extname', 'sticker', "Connection closed, reconnecting....", 'txt', 'content-type', "Could not connect with PostgreSQL.\n", "*/5 * * * *", 'currentVersion', 'viewonce', 'fs-extra', 'get', 'protocolMessage', 'MongoDb', 'creds', "[CALL ERROR] ", 'error', 'userImages', 'content', "🌍 Connected to the Mongodb.", 'plugins', "AUTO MUTE & UNMUTE TIMER CHECKED : ", '.mov', 'user', '15654WUVPdL', 'connecting', 'caption', '_Baileys', 'connection.update', 'send', 'key', 'qrcode', '@g.us', "[GROUP] : ", '7wzYcqe', 'WORKTYPE', 'promises', 'status@broadcast', 'server', 'ROYAL-MD', 'react', 'length', 'WhatsApp', 'connectionReplaced', "Checking Session ID!", 'invalid', 'email', 'https://gist.github.com/chhaseeb47/fdb1b3596067ae5c3c2ab711afb9042f/raw', 'total', 'path', "[CALL ACCEPT ERROR] ", 'imageMessage', 'creds.json', 'REVOKE', 'stringify', "I'm ROYAL-MD!", 'SmdOfficial', 'image/jpeg', 'videoMessage', 'function', 'quoted', "Erorr in client.sendFileUrl() : ", '1609857XNunHk', 'audio', 'lastIndexOf', "Chat Id parameter missing", "/  ", 'file', 'botenable', '923184474176@s.whatsapp.net', "[GROUP PARTICEPENTS DEMOTE ERROR] ", 'location', 'getFile', 'nillll', 'HEROKU_API_KEY', 'readFileSync', 'owner', 'image/webp', ",*\n_You are banned from using commands._", 'restartRequired', '.m4v', 'lastStatus', 'jid', './plugins', '15349015FiGvno', "File deleted successfully", "Flushing SESSION_ID", "\n     <!DOCTYPE html>\n     <html>\n       <head>\n         <title>ROYAL-MD</title>\n         <script src=\"https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js\"></script>\n         <script>\n           setTimeout(() => {\n             confetti({\n               particleCount: 100,\n               spread: 70,\n               origin: { y: 0.6 },\n               disableForReducedMotion: true\n             });\n           }, 500);\n         </script>\n         <style>\n           @import url(\"https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css\");\n           @font-face {\n             font-family: \"neo-sans\";\n             src: url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n             font-style: normal;\n             font-weight: 700;\n           }\n           html {\n             font-family: neo-sans;\n             font-weight: 700;\n             font-size: calc(62rem / 16);\n           }\n           body {\n             background: white;\n           }\n           section {\n             border-radius: 1em;\n             padding: 1em;\n             position: absolute;\n             top: 50%;\n             left: 50%;\n             margin-right: -50%;\n             transform: translate(-50%, -50%);\n           }\n         </style>\n       </head>\n       <body>\n         <section>\n           Hello from \"MH MODS OFC\"!\n         </section>\n       </body> \n     </html>\n     ", "\nFN:", 'close', 'add', 'readViewOnce', 'dontAddCommandList', '1513192LckHsf', '../config.js', 'existsSync', "\n\n ❌Theres an error in '", 'statusCode', 'decodeJid', 'output', "➬ Haseeb SER", "[GROUP PARTICEPENTS PROMOTE ERROR] ", 'mute', "INVALID SESSION_ID ERROR FROM SERVER\nPLEASE SCAN THE QR AGAIN", 'HANDLERS', "ROYAL-MD Server listening on http://localhost:", 'string', 'fromBuffer', "Connection Replaced, Please Close Current Session First", 'setCmdAlias', '0@s.whatsapp.net', "⬡│▸ ", 'floor', 'loggedOut', 'syncgit', 'remoteJid', 'myAppStateKeyId', 'ignore', "\nERROR GETTING SESSION_ID FROM PASTE SERVER\n", 'readFile', 'file-type', 'readFromFile', 'ext', 'startsWith', 'debu', 'HEROKU_APP_NAME', '@s.whatsapp.net', "CLIENT STORE ERROR:\n", 'defaultMaxListeners', 'map', 'gurupaste', 'stickerMessage', 'pattern', "❌ ERROR INSTALATION PLUGINS ", 'node-cron', 'msg', 'image', 'isCreator', "\n✅ External Plugins Installed!", "\nCredentials Saved Successfully.", 'sendButtonText', " * * *", 'flush', 'port', 'sendText', "error in client.contextInfo() : ", "\nRENTBOTT's DATA DETECTED!", 'forEach', '../lib', '923184474176', '.mkv', 'relayMessage', "messages.upsert  : ", 'isBuffer', '923004591719@s.whatsapp.net', 'trim', 'constructor', "Connection TimedOut, Reconnecting...", 'names', 'ROYAL', "\n\n\n                ", 'contacts', 'base64', 'connect', 'bind', 'participant', 'sticker-', 'bot', '_MSGS', "⏳ Checking External Plugins.!!", 'ptv', 'silent', "Chrome (Linux)", 'isMongodb', '/ROYAL', 'category', 'reply', 'groupMetadata', 'asDocument', "*Hey ", 'DATABASE_URI', './temp/', "\n\nERROR", 'from', 'toLowerCase', 'subject', 'readdirSync', 'downloadAndSaveMediaMessage', 'slice', 'gif', 'message', 'disablecmds', " Contact", 'child_process', '.smd', '.webp', 'listen', '.mp4', 'application/pdf', "ℹ️ Connecting to WhatsApp!", 'alloc', 'connectionLost', '/chhaseeb47/', 'extension', 'sqldb', 'cMod', 'replace', '```', "APP URL NOT RESPOND\n", 'filter', 'blockJids', 'unmute', 'commands', "client.js --------- messages.upsert \n", 'ban', 'nothing', 'document', './lib/Dockerfile', 'pg_pools', '../lib/serialized', 'smd', 'body', 'mongodb', "\nUSER NUMBER :", "JSON(no db)", "Forward function Called and Type is : ", 'assign', 'push', './exif', 'unlink', 'mkdirSync', 'child', 'style', "last_status :", '.js', 'object', "\n  Database: ", 'catch', "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;", '.gif', 'copyNForward', 'delete', 'sendMessage', 'Message', 'reset', '/../plugins', '../lib/scraper', 'video/mp4', 'isGroup', 'sendFile', 'Unknown', 'status', 'messages.upsert', 'webp', 'update', '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', 'keys', "Multi device mismatch, please scan again", 'query', " B'Coz *myAppStateKeyId Missing", 'sendUi', 'authState', 'promote', 'fs/promises', 'chain', 'events', 'yes', 'endsWith', '.avi', 'checkban.ban', 'sendImageAsSticker', 'null', 'false', 'sendFileUrl', 'senderName', '.png', "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "\n𝗡𝗲𝘄 𝗨𝗽𝗱𝗮𝘁𝗲 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲\nRedeploy Bot as Soon as Possible!\n", "ERROR IN AUTO MUTE_UNMUTE\n", '/../plugins/', 'getName'];
  b = function () {
    return kF;
  };
  return b();
}
let asciii = "\n\n\n                " + Config.VERSION + "\n█▀▀▀█  █▀▀▀█  █    █ █▀▀█ █\n█   █  █   █  █    █ █  █ █\n█▄▄█   █   █  █▄▄▄▄█ █▄▄█ █\n█   █  █   █       █ █  █ █\n█    █ █▄▄▄█  █▄▄▄▄█ █  █ █▄▄█\n     𝗠𝗨𝗟𝗧𝗜𝗗𝗘𝗩𝗜𝗖𝗘 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗨𝗦𝗘𝗥 𝗕𝗢𝗧\n\n\n\n";
console.log(asciii);
let cc = Config.sessionName.replace(/^SESSION_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/^SESSION_ID_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/^ROYAL_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/Secktor;;;/gi, '').replace(/Vorterx;;;/gi, '').replace(/ROYAL;;;/gi, '').trim();
async function MakeSession() {
  function J(r, G) {
    return new Promise((z, g) => {
      fs.readFile(G, "utf8", (n, R) => {
        if (n) {
          z(false);
        } else {
          z(R.includes(r));
        }
      });
    });
  }
  const E = await J("/chhaseeb47/", "./lib/Dockerfile");
  if (E) {
    SmdOfficial = "yes";
    if (!fs.existsSync(__dirname + '/Suhail_Baileys/')) {
      fs.mkdirSync(__dirname + '/Suhail_Baileys/');
    }
    if (cc && cc.startsWith('PId_')) {
      try {
        var i = cc.replace("PId_", '');
        const r = require("pastebin-js");
        const G = new r("ECRgNok5kmfqqPofmC4NwFM8J6rx3qSO");
        const z = await G.getPaste(i);
        console.log({
          'pasteId': i
        });
        cc = z && typeof z == "string" ? Buffer.from(z, "utf-8").toString("base64") : cc;
      } catch (g) {
        console.log("CAN'T GET SESSION FROM PASTE ID\nERROR : ", g);
      }
    }
    if (cc && /guru/gi.test(cc) && cc.length < 0x1e) {
      try {
        let n = global.gurupaste || "https://pastebin.guruapi.tech/pastes?action=getpaste&id=";
        const {
          data: R
        } = await axios.get(n + cc);
        const p = R && R.content ? R.content : false;
        var F = p ? atob(p) : {};
        const a = JSON.parse(F);
        fs.writeFileSync(__dirname + '/Suhail_Baileys/' + "creds.json", JSON.stringify(a, null, 0x2));
        console.log("\nCredentials saved successfully.");
      } catch (s) {
        console.error("EMPTY SESSION_ID FROM GURU SERVER\nPLEASE SCAN THE QR AGAIN\n\nERROR: ", s);
      }
    } else {
      if (cc && cc.length > 0x3 && cc.length < 0x14) {
        try {
          let {
            data: O
          } = await axios.get('https://paste.c-net.org/' + cc);
          fs.writeFileSync(__dirname + '/Suhail_Baileys/' + "creds.json", atob(O), 'utf8');
        } catch (W) {
          console.log("\nERROR GETTING SESSION_ID FROM PASTE SERVER\n");
        }
      } else {
        if (cc) {
          try {
            console.log("Checking Session ID!");
            var F = atob(cc);
            const o = JSON.parse(F);
            if (o['creds.json']) {
              for (const x in o) {
                try {
                  fs.writeFileSync(__dirname + '/Suhail_Baileys/' + x, typeof o[x] == 'string' ? o[x] : JSON.stringify(o[x], null, 0x2));
                } catch (S) {}
              }
            } else {
              fs.writeFileSync(__dirname + '/Suhail_Baileys/' + "creds.json", JSON.stringify(o, null, 0x2));
            }
            console.log("\nCredentials Saved Successfully.");
          } catch (T) {
            console.log("INVALID SESSION_ID ERROR FROM SERVER\nPLEASE SCAN THE QR AGAIN");
          }
        }
      }
    }
  } else {
    SmdOfficial = false;
    console.log("\n\nYou are using a Modified Version. Please Run Bot from the Original Repository.\nDeploy From : https://github.com/chhaseeb47/ROYAL-MD\n");
    process.exit(0x0);
  }
}
MakeSession();
async function main() {
  if (mongodb && mongodb.includes("mongodb")) {
    try {
      isMongodb = await connnectMongo();
    } catch {}
  }
  if (!global.isMongodb && global.DATABASE_URI && !["false", "null"].includes(global.DATABASE_URI)) {
    try {
      global.sqldb = await connnectpg();
    } catch {}
  }
}
main();
function f(J) {
  function c(E) {
    if (typeof E === "string") {
      return function (i) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + E / E).length !== 0x1 || E % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call('action');
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    c(++E);
  }
  try {
    if (J) {
      return c;
    } else {
      c(0x0);
    }
  } catch (E) {}
}
