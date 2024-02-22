let optJson = {
  'bot_': {},
  "sck1": {},
  "sck": {}
};
global.toBool = (item, type = false) => /true|yes|ok|act|enable|smd/gi.test(item) ? type ? true : "true" : type ? false : "false";
let wlcmm = toBool(global.wlcm);
let gdbyee = toBool(global.gdbye);
(function (_0x27c42e, _0x492ea2) {
  const _0x25cb9b = _0x27c42e();
  while (true) {
    try {
      const _0x2317dc = parseInt(_0x42af(0xe4)) / 0x1 * (parseInt(_0x42af(0x10e)) / 0x2) + parseInt(_0x42af(0xbf)) / 0x3 * (-parseInt(_0x42af(0x10b)) / 0x4) + -parseInt(_0x42af(0x100)) / 0x5 * (-parseInt(_0x42af(0xb4)) / 0x6) + -parseInt(_0x42af(0xf2)) / 0x7 * (parseInt(_0x42af(0xd2)) / 0x8) + -parseInt(_0x42af(0xdd)) / 0x9 * (-parseInt(_0x42af(0xc9)) / 0xa) + -parseInt(_0x42af(0x115)) / 0xb + parseInt(_0x42af(0xdc)) / 0xc * (parseInt(_0x42af(0xd7)) / 0xd);
      if (_0x2317dc === _0x492ea2) {
        break;
      } else {
        _0x25cb9b.push(_0x25cb9b.shift());
      }
    } catch (_0x4e5a56) {
      _0x25cb9b.push(_0x25cb9b.shift());
    }
  }
})(_0x3786, 0x54e96);
const {
  sck1
} = require(__dirname + "/database/user");
const {
  sck
} = require(__dirname + '/database/group');
const {
  alive
} = require(__dirname + "/database/alive");
const {
  Pool
} = require('pg');
let pool = new Pool({
  'connectionString': global.DATABASE_URI,
  'ssl': {
    'rejectUnauthorized': false
  }
});
let pg = {};
const fs = require('fs');
let pgtables = {
  'bot_': " \n        CREATE TABLE IF NOT EXISTS bot_ (\n          id VARCHAR(255) UNIQUE NOT NULL DEFAULT 'ROYAL-MD',\n          alive_text VARCHAR(255) DEFAULT 'Some text',\n          alive_get VARCHAR(255) DEFAULT '*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ*',\n          alive_url VARCHAR(255) DEFAULT 'you didnt set alive message yet',\n          alive_image BOOLEAN DEFAULT false,\n          alive_video BOOLEAN DEFAULT false,\n          permit BOOLEAN DEFAULT false,\n          permit_values VARCHAR(255) DEFAULT 'all',\n          chatbot VARCHAR(255) DEFAULT 'false',\n          bgm BOOLEAN DEFAULT false,\n          bgmarray JSON DEFAULT '{}',\n          plugins JSON DEFAULT '{}',\n          notes JSON DEFAULT '{}',\n          antiviewonce VARCHAR(255) DEFAULT 'true',\n          antidelete VARCHAR(255) DEFAULT 'true',\n          autobio VARCHAR(255) DEFAULT 'false',\n          levelup VARCHAR(255) DEFAULT 'false',\n          autoreaction VARCHAR(255) DEFAULT 'true',\n          anticall VARCHAR(255) DEFAULT 'true',\n          mention JSON DEFAULT '{}',\n          filter JSON DEFAULT '{}',\n          afk JSON DEFAULT '{}',\n          rent JSON DEFAULT '{}',\n temp JSON DEFAULT '{}'           \n        );",
  'sck1': "\n  CREATE TABLE IF NOT EXISTS sck1 (\n    id VARCHAR(255) UNIQUE NOT NULL DEFAULT 'ROYAL-MD',\n    name VARCHAR(255) DEFAULT 'Unknown',\n    times INTEGER DEFAULT 0,\n    permit VARCHAR(255) DEFAULT 'false',\n    ban VARCHAR(255) DEFAULT 'false',\n    afk VARCHAR(255) DEFAULT 'false',\n    afktime INTEGER DEFAULT 0,\n    bot BOOLEAN DEFAULT false,\n    msg JSON DEFAULT '{}',\n    warn JSON DEFAULT '{}' \n  );",
  'sck': _0x42af(0x105) + ",\n disables TEXT[] DEFAULT ARRAY[]::TEXT[] " + " \n);"
};
let cacheTable = {};
pg.connnectpg = () => {
  cacheTable.connnectpg = true;
  pool = new Pool({
    'connectionString': global.DATABASE_URI,
    'ssl': {
      'rejectUnauthorized': false
    }
  });
  pool.on("connect", () => {
    console.log("Connected to the PostgreSQL database.");
    sqldb = true;
    return sqldb;
  });
  pool.on("error", _0xf61d27 => {
    console.error("PostgreSQL database error :", _0xf61d27);
    sqldb = false;
    return sqldb;
  });
};
pg.createTable = async _0x504410 => {
  if (!sqldb && !cacheTable.connnectpg) {
    let _0x1c1fab = pg.connnectpg();
    if (!_0x1c1fab) {
      return false;
    }
  }
  if (cacheTable[_0x504410]) {
    return true;
  }
  const _0x1c2fb7 = await pool.connect();
  try {
    await _0x1c2fb7.query("BEGIN");
    await _0x1c2fb7.query(pgtables[_0x504410]);
    await _0x1c2fb7.query("COMMIT");
    if (!cacheTable[_0x504410]) {
      console.log("PostgreSQL " + _0x504410 + " Table created in Database.");
    }
    cacheTable[_0x504410] = true;
    return cacheTable[_0x504410];
  } catch (_0x4b7bf3) {
    await _0x1c2fb7.query('ROLLBACK');
    console.error("Error creating PostgreSQL " + _0x504410 + " Table:", _0x4b7bf3);
    return false;
  } finally {
    _0x1c2fb7.release();
  }
};
pg.countDocuments = async _0x5dc811 => {
  if (!(await pg.createTable(_0x5dc811))) {
    return 0x0;
  }
  const _0x2948e8 = await pool.connect();
  try {
    const _0xb19786 = await _0x2948e8.query("SELECT COUNT(*) FROM " + _0x5dc811);
    return parseInt(_0xb19786.rows[0x0].count);
  } catch (_0x1656d6) {
    return 0x0;
  } finally {
    _0x2948e8.release();
  }
};
pg["new"] = async (_0x5aebf4, _0x30a3ac) => {
  if (!(await pg.createTable(_0x5aebf4))) {
    return false;
  }
  const _0x2fe7eb = await pool.connect();
  try {
    await _0x2fe7eb.query("BEGIN");
    if (await pg.findOne(_0x5aebf4, _0x30a3ac)) {
      return await pg.updateOne(_0x5aebf4, {
        'id': _0x30a3ac?.['id']
      }, _0x30a3ac);
    }
    const _0x18d3e1 = "\n      INSERT INTO " + _0x5aebf4 + " (" + Object.keys(_0x30a3ac).join(", ") + ")\n      VALUES (" + Object.keys(_0x30a3ac).map((_0x23b930, _0x1f0da4) => '$' + (_0x1f0da4 + 0x1)).join(", ") + ")\n      ON CONFLICT (id) DO NOTHING\n      RETURNING *;\n    ";
    const _0x1c8f82 = Object.values(_0x30a3ac);
    const _0x5e45c5 = await _0x2fe7eb.query(_0x18d3e1, _0x1c8f82);
    await _0x2fe7eb.query("COMMIT");
    return _0x5e45c5.rows[0x0];
  } catch (_0xc029aa) {
    await _0x2fe7eb.query("ROLLBACK");
    console.error("Error inserting new row into " + _0x5aebf4 + "\n", _0xc029aa);
    return false;
  } finally {
    _0x2fe7eb.release();
  }
};
pg.findOne = async (_0x122a3a, _0x50126e) => {
  if (!(await pg.createTable(_0x122a3a))) {
    return false;
  }
  const _0x46f5fc = await pool.connect();
  try {
    const _0x26eebb = await _0x46f5fc.query("SELECT * FROM " + _0x122a3a + " WHERE id = $1", [_0x50126e?.['id']]);
    return _0x26eebb.rows[0x0];
  } catch (_0x54974b) {
    console.error("Error while finding " + _0x122a3a + " document by Id: " + _0x50126e?.['id'] + "\n", _0x54974b);
    return false;
  } finally {
    _0x46f5fc.release();
  }
};
pg.find = async (_0x20560f, _0x3bccbe = {}) => {
  if (!(await pg.createTable(_0x20560f))) {
    return [];
  }
  const _0x197e0b = await pool.connect();
  try {
    let _0x4e34e1 = Object.values(_0x3bccbe);
    if (!_0x4e34e1 || !_0x4e34e1[0x0]) {
      return (await _0x197e0b.query("SELECT * FROM " + _0x20560f))?.["rows"] || [];
    } else {
      if (_0x3bccbe?.['id']) {
        return [{
          ...(await pg.findOne(_0x20560f, _0x3bccbe))
        }] || [];
      }
    }
  } catch (_0xf63d3b) {
    console.error("Error while find " + _0x20560f + " documents", _0xf63d3b);
    return [];
  } finally {
    _0x197e0b.release();
  }
};
pg.updateOne = async (_0x2babcf, _0x3e2e33, _0x1d2c26 = {}) => {
  if (!(await pg.createTable(_0x2babcf))) {
    return false;
  }
  const _0xa1083 = await pool.connect();
  try {
    await _0xa1083.query('BEGIN');
    const _0x3b1f12 = "SELECT * FROM " + _0x2babcf + " WHERE id = $1 FOR UPDATE";
    const _0x3c74d4 = await _0xa1083.query(_0x3b1f12, [_0x3e2e33?.['id']]);
    if (_0x3c74d4.rows[0x0]) {
      const _0x1d4719 = "UPDATE " + _0x2babcf + " SET " + Object.keys(_0x1d2c26).map((_0x5e03b5, _0x3b6518) => _0x5e03b5 + " = $" + (_0x3b6518 + 0x2)).join(", ") + " WHERE id = $1 RETURNING *;";
      const _0x5202ab = [_0x3e2e33.id, ...Object.values(_0x1d2c26)];
      const _0x5bd734 = await _0xa1083.query(_0x1d4719, _0x5202ab);
      await _0xa1083.query("COMMIT");
      return _0x5bd734.rows[0x0];
    } else {
      return await pg["new"](_0x2babcf, {
        ..._0x3e2e33,
        ..._0x1d2c26
      });
    }
  } catch (_0x395931) {
    await _0xa1083.query("ROLLBACK");
    console.error("Error while finding and updating " + _0x2babcf + " document by Id: " + _0x3e2e33?.['id'] + "\n", _0x395931);
    return [];
  } finally {
    _0xa1083.release();
  }
};
pg.findOneAndDelete = async (_0x1d8a2d, _0x3ba867) => {
  if (!(await pg.createTable(_0x1d8a2d))) {
    return false;
  }
  const _0x627c93 = await pool.connect();
  try {
    await _0x627c93.query("BEGIN");
    const _0x2e816a = await _0x627c93.query("SELECT * FROM " + _0x1d8a2d + " WHERE id = $1 FOR UPDATE", [_0x3ba867?.['id']]);
    if (_0x2e816a.rows[0x0]) {
      const _0x4dd28b = await _0x627c93.query("DELETE FROM " + _0x1d8a2d + " WHERE id = $1 RETURNING *", [_0x3ba867.id]);
      await _0x627c93.query('COMMIT');
      return _0x4dd28b.rows[0x0];
    } else {
      return true;
    }
  } catch (_0x1c46e7) {
    await _0x627c93.query("ROLLBACK");
    console.error("Error while finding and deleting " + _0x1d8a2d + " document by Id: " + _0x3ba867?.['id'] + "\n", _0x1c46e7);
    return false;
  } finally {
    _0x627c93.release();
  }
};
pg.collection = {
  'drop': async _0x2bc9ef => {
    if (!(await pg.createTable(_0x2bc9ef))) {
      return false;
    }
    const _0x16297a = await pool.connect();
    try {
      await _0x16297a.query("BEGIN");
      await _0x16297a.query("DROP TABLE IF EXISTS " + _0x2bc9ef);
      await _0x16297a.query("COMMIT");
      return true;
    } catch (_0x39b933) {
      await _0x16297a.query('ROLLBACK');
      console.error("Error while dropping " + _0x2bc9ef + " table\n", _0x39b933);
      return false;
    } finally {
      _0x16297a.release();
    }
  }
};
let dbs = {
  "newtables": {
    'bot_': {
      'id': "ROYALMD",
      'alive_text': "*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* \n\n_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ \n_Cʀєαtєd вყ : ѕυнαιℓ tєᴄʜ info_\n_If any query : wa.me/923184474176_\n\n\n*_Update Alive Message by adding text with Alive_* \n*Eg: _.alive Your_Alive_Message_*",
      'alive_get': "you did'nt set alive message yet\nType [.alive info] to get alive info",
      'alive_url': '',
      'alive_image': false,
      'alive_video': false,
      'permit': false,
      'permit_values': "all",
      'chatbot': "false",
      'antiviewonce': "false",
      'antidelete': "false",
      'autobio': "false",
      'levelup': "false",
      'anticall': "false",
      'autoreaction': 'false',
      'bgm': false,
      'bgmarray': {},
      'plugins': {},
      'notes': {},
      'warn': {},
      'afk': {},
      'filter': {},
      'mention': {},
      'rent': {},
      ...optJson.bot_
    },
    'sck': {
      'id': "ROYALMD",
      'events': "false",
      'nsfw': "false",
      'pdm': "false",
      'antipromote': "false",
      'antidemote': 'false',
      'welcome': wlcmm,
      'goodbye': gdbyee,
      'welcometext': "*@user @pp Welcome Bruhhh In @gname.....!!!!!😊👇🏻♥️* \n\n*_GROUP DESCRIPTION_*\n@desc\n\n\n *______________*\n   *Support us by Subscribing*\n*Youtube.com/mhmodsofc*",
      'goodbyetext': "*@user @pp Left From @gname.....!!!!!😒👆🏻♥️* \n\n*_GROUP DESCRIPTION_*\n@desc\n\n\n *______________*\n   *Support us by Subscribing*\n*Youtube.com/mhmodsofc*",
      'botenable': "true",
      'antilink': "false",
      'antiword': {},
      'antifake': 'false',
      'antispam': "false",
      'antitag': 'false',
      'antibot': "false",
      'onlyadmin': 'false',
      'economy': 'false',
      'disablecmds': "false",
      'chatbot': "false",
      'mute': 'false',
      'unmute': 'false',
      ...optJson.sck
    },
    'sck1': {
      'id': 'chatid',
      'name': "Unknown",
      'times': 0x0,
      'permit': 'false',
      'ban': "false",
      'warn': {},
      ...optJson.sck1
    }
  },
  loadGroupData: async _0x4aec16 => {
    try {
      return fs.existsSync(__dirname + '/' + _0x4aec16 + '.json') ? await JSON.parse(fs.readFileSync(__dirname + '/' + _0x4aec16 + ".json", "utf8")) : (await fs.writeFileSync(__dirname + '/' + _0x4aec16 + ".json", JSON.stringify({}, null, 0x2), "utf8"), {});
    } catch (_0x1c75ad) {
      console.error("Error loading user data:", _0x1c75ad);
      return {};
    }
  },
  "saveGroupData": async (_0x1274e2, _0x348609 = {}) => {
    await fs.writeFileSync(__dirname + '/' + _0x1274e2 + ".json", JSON.stringify(_0x348609, null, 0x2), 'utf8');
  },
  "countDocuments": async _0xd5f97 => {
    try {
      let _0x548dd6 = await dbs.loadGroupData(_0xd5f97);
      let _0x428a0e = Object.keys(_0x548dd6);
      return _0x428a0e.length;
    } catch (_0xfe2d05) {
      console.log("Error while countDocuments of " + _0xd5f97 + " in database,\n", _0xfe2d05);
      return 0x0;
    }
  },
  'new': async (_0x24d4d3, _0x4f4ffd) => {
    try {
      let _0x143f76 = await dbs.loadGroupData(_0x24d4d3);
      return !_0x143f76[_0x4f4ffd.id] ? (_0x143f76[_0x4f4ffd.id] = {
        ...dbs.newtables[_0x24d4d3],
        ..._0x4f4ffd
      }, await dbs.saveGroupData(_0x24d4d3, _0x143f76), _0x143f76[_0x4f4ffd.id]) : _0x143f76[_0x4f4ffd.id];
    } catch (_0x1f57de) {
      console.log("Error while Creating new " + _0x24d4d3 + " in database,\n", _0x1f57de);
      return {};
    }
  },
  "findOne": async (_0x3755d2, _0x45d8af) => {
    try {
      let _0x42869f = await dbs.loadGroupData(_0x3755d2);
      if (_0x42869f[_0x45d8af.id]) {
        return _0x42869f[_0x45d8af.id];
      } else {
        return;
      }
    } catch (_0xe5a1d2) {
      console.log("Error while findOne " + _0x3755d2 + " in database,\n", _0xe5a1d2);
      return;
    }
  },
  find: async (_0x3c6eaa, _0x3faf79 = {}) => {
    try {
      let _0x199c9d = Object.values(_0x3faf79);
      let _0x43ed9f = await dbs.loadGroupData(_0x3c6eaa);
      if (_0x43ed9f[_0x3faf79.id]) {
        return [{
          ..._0x43ed9f[_0x3faf79.id]
        }];
      } else {
        if (!_0x199c9d[0x0]) {
          return Object.values(_0x43ed9f);
        }
      }
      return [];
    } catch (_0x3e9689) {
      console.log("Error while finding  " + _0x3c6eaa + "(s) in database,\n", _0x3e9689);
      return [];
    }
  },
  "updateOne": async (_0x1a7091, _0x3dab4c, _0x5c0baf = {}) => {
    try {
      let _0xa50960 = await dbs.loadGroupData(_0x1a7091);
      return _0xa50960[_0x3dab4c.id] ? (_0xa50960[_0x3dab4c.id] = {
        ..._0xa50960[_0x3dab4c.id],
        ..._0x5c0baf
      }, await dbs.saveGroupData(_0x1a7091, _0xa50960), _0xa50960[_0x3dab4c.id]) : await dbs["new"](_0x1a7091, {
        ..._0x3dab4c,
        ..._0x5c0baf
      });
    } catch (_0x300005) {
      console.log("Error while updateOne " + _0x1a7091 + " in database,\n", _0x300005);
      return {};
    }
  },
  findOneAndDelete: async (_0x326b9c, _0x460d9d) => {
    try {
      let _0x14fd37 = await dbs.loadGroupData(_0x326b9c);
      delete _0x14fd37[_0x460d9d.id];
      await dbs.saveGroupData(_0x326b9c, _0x14fd37);
      return true;
    } catch (_0x36e6b4) {
      console.log("Error while findOneAndDelete " + _0x326b9c + " in database,\n", _0x36e6b4);
      return null;
    }
  },
  "delete": dbs.findOneAndDelete,
  "collection": {
    'drop': async _0x21d775 => {
      try {
        let _0x429da1 = await dbs.loadGroupData(_0x21d775);
        Object.keys(_0x429da1).forEach(_0x1c3b72 => delete _0x429da1[_0x1c3b72]);
        await dbs.saveGroupData(_0x21d775, _0x429da1);
        return true;
      } catch (_0x34c40f) {
        console.log("Error while collection.drop all user in database,\n", _0x34c40f);
        return null;
      }
    }
  },
  deleteAll: dbs.collection.drop
};
let groupdb = {
  "countDocuments": async () => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (isMongodb) {
        return await sck.countDocuments();
      } else {
        return sqldb && pg ? await pg.countDocuments("sck") : await dbs.countDocuments("sck");
      }
    } catch (_0x590a51) {
      console.log("Error while Creating user in database,\n", _0x590a51);
      return 0x0;
    }
  },
  "new": async _0x1ec9f9 => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (isMongodb) {
        let _0x7ed81a = (await sck.findOne({
          'id': _0x1ec9f9.id
        })) || (await new sck({
          'id': _0x1ec9f9.id,
          ..._0x1ec9f9
        }).save());
        return _0x7ed81a;
      } else {
        if (sqldb && pg) {
          var _0x202457 = (await pg.findOne("sck", {
            'id': _0x1ec9f9.id
          })) || (await pg["new"]("sck", _0x1ec9f9));
          return _0x202457;
        } else {
          var _0x202457 = (await dbs.findOne("sck", {
            'id': _0x1ec9f9.id
          })) || (await dbs['new']("sck", _0x1ec9f9));
          return _0x202457;
        }
      }
    } catch (_0xe86aee) {
      console.log("Error while Creating user in database,\n", _0xe86aee);
      return {};
    }
  },
  "findOne": async _0x330e76 => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (isMongodb) {
        return await sck.findOne({
          'id': _0x330e76.id
        });
      } else {
        if (sqldb && pg) {
          return await pg.findOne("sck", _0x330e76);
        } else {
          var _0x45fdc3 = await dbs.findOne("sck", {
            'id': _0x330e76.id
          });
          return _0x45fdc3;
        }
      }
    } catch (_0x3ac078) {
      console.log("Error while finding user in database,\n", _0x3ac078);
      return;
    }
  },
  "find": async _0x5e8666 => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (isMongodb) {
        let _0x5f5210 = await sck.find(_0x5e8666);
        return _0x5f5210;
      } else {
        return sqldb && pg ? await pg.find("sck", _0x5e8666) : await dbs.find("sck", _0x5e8666);
      }
    } catch (_0x525a5b) {
      console.log("Error while finding user in database,\n", _0x525a5b);
      return [];
    }
  },
  updateOne: async (_0x2f5d5d, _0x4c5db7 = {}) => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (!_0x2f5d5d.id) {
        return {};
      }
      if (isMongodb) {
        return await sck.updateOne({
          'id': _0x2f5d5d.id
        }, {
          ..._0x4c5db7
        });
      } else {
        return sqldb && pg ? await pg.updateOne("sck", {
          'id': _0x2f5d5d.id
        }, _0x4c5db7) : await dbs.updateOne("sck", _0x2f5d5d, _0x4c5db7);
      }
    } catch (_0x10ee08) {
      console.log("Error while updateOne user in database,\n", _0x10ee08);
      return {};
    }
  },
  findOneAndDelete: async _0x45c863 => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (!_0x45c863.id) {
        return [];
      }
      if (isMongodb) {
        return await sck.findOneAndDelete({
          'id': _0x45c863.id
        });
      } else {
        return sqldb && pg ? await pg.findOneAndDelete("sck", _0x45c863) : await dbs.findOneAndDelete("sck", _0x45c863);
      }
    } catch (_0x28b41e) {
      console.log("Error while findOneAndDelete user in database,\n", _0x28b41e);
      return null;
    }
  },
  'delete': groupdb.findOneAndDelete,
  "collection": {
    'drop': async () => {
      try {
        if (!global.SmdOfficial) {
          return;
        }
        if (isMongodb) {
          return await sck.collection.drop();
        } else {
          return sqldb && pg ? await pg.collection.drop("sck") : await dbs.collection.drop("sck");
        }
      } catch (_0x15aa28) {
        console.log("Error while collection.drop all user in database,\n", _0x15aa28);
        return null;
      }
    }
  }
};
function _0x3786() {
  const _0x559374 = ['saveGroupData', "Error while updateOne user in database,\n", "SELECT * FROM ", "you did'nt set alive message yet\nType [.alive info] to get alive info", "Error while countDocuments of ", '270isLvTw', "Error while finding user in database,\n", "DELETE FROM ", 'updateOne', 'createTable', 'error', ")\n      VALUES (", 'stringify', 'ROYALMD', 'find', 'join', '42897ltDYnG', "Error userdb.find() in user database,\n", 'connect', " WHERE id = $1 FOR UPDATE", 'new', "Error loading user data:", 'SmdOfficial', 'countDocuments', "Error while Creating new ", "Connected to the PostgreSQL database.", '1095270dYKqJn', 'existsSync', "Error while dropping ", 'findOneAndDelete', 'false', 'bot_', "Error inserting new row into ", "Error from userdb.countDocuments() in user database,\n", 'parse', '136432zYRGYE', "Error while finding ", "Error while finding  ", 'release', "*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* \n\n_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ \n_ᴄʀᴇᴀᴛᴇᴅ ʙʏ   ᴄʜ ʜᴀꜱᴇᴇʙ_\n_If any query : wa.me/92462054847_\n\n\n*_Update Alive Message by adding text with Alive_* \n*Eg: _.alive Your_Alive_Message_*", '26kgWBZX', 'length', '/database/alive', 'true', "Error while Creating user in database,\n", '3363696tWEWFg', '36kArYvK', 'collection', 'drop', " \n  );", 'ROLLBACK', "Error while updateOne ", "PostgreSQL database error :", '13szDYcM', "Error while findOneAndDelete ", 'DATABASE_URI', " document by Id: ", "PostgreSQL ", " WHERE id = $1 RETURNING *;", 'writeFileSync', 'map', 'exports', " Table created in Database.", 'all', ")\n      ON CONFLICT (id) DO NOTHING\n      RETURNING *;\n    ", '/database/user', 'save', '119LojaUP', "*@user @pp Left From @gname.....!!!!!😒👆🏻♥️* \n\n*_GROUP DESCRIPTION_*\n@desc\n\n\n *______________*\n   *Support us by Subscribing*\n*Youtube.com/mhmodsofc*", "\n  CREATE TABLE IF NOT EXISTS sck1 (\n    id VARCHAR(255) UNIQUE NOT NULL DEFAULT 'ROYAL-MD',\n    name VARCHAR(255) DEFAULT 'Unknown',\n    times INTEGER DEFAULT 0,\n    permit VARCHAR(255) DEFAULT 'false',\n    ban VARCHAR(255) DEFAULT 'false',\n    afk VARCHAR(255) DEFAULT 'false',\n    afktime INTEGER DEFAULT 0,\n    bot BOOLEAN DEFAULT false,\n    msg JSON DEFAULT '{}',\n    warn JSON DEFAULT '{}'", '.json', 'keys', 'loadGroupData', 'values', 'newtables', 'sck', 'COMMIT', "DROP TABLE IF EXISTS ", "Error userdb.findOne() in user database,\n", "Error while findOne ", " \n);", '27470wkJGkY', " in database,\n", 'log', "Error userdb.new() in user database,\n", "Error userdb.findOneAndDelete() in user database,\n", "CREATE TABLE IF NOT EXISTS Sck (\n    id VARCHAR(255) UNIQUE NOT NULL DEFAULT 'ROYALMD',\n    events VARCHAR(255) DEFAULT 'false',\n    nsfw VARCHAR(255) DEFAULT 'false',\n    pdm VARCHAR(255) DEFAULT 'false',\n    antipromote VARCHAR(255) DEFAULT 'false',\n    antidemote VARCHAR(255) DEFAULT 'false',\n    welcome VARCHAR(255) DEFAULT '" + wlcmm + "',\n    goodbye VARCHAR(255) DEFAULT '" + gdbyee + "',\n    welcometext TEXT DEFAULT '@user @pp Welcome Bruhhh In @gname.....!!!!!😊👇🏻♥️\n\n_GROUP DESCRIPTION_\n@desc\n\n\n______________\nSupport us by Subscribing\nYoutube.com/mhmodsofc',\n    goodbyetext TEXT DEFAULT '@user @pp Left From @gname.....!!!!!😒👆🏻♥️\n\n_GROUP DESCRIPTION_\n@desc\n\n\n______________\nSupport us by Subscribing\nYoutube.com/ fo',\n    botenable VARCHAR(255) DEFAULT 'true',\n    antilink VARCHAR(255) DEFAULT 'false',\n    antiword JSON DEFAULT '{}',\n    antifake VARCHAR(255) DEFAULT 'false',\n    antispam VARCHAR(255) DEFAULT 'false',\n    antitag VARCHAR(255) DEFAULT 'false',\n    antibot VARCHAR(255) DEFAULT 'false',\n    onlyadmin VARCHAR(255) DEFAULT 'false',\n    economy VARCHAR(255) DEFAULT 'false',\n    disablecmds VARCHAR(255) DEFAULT 'false',\n    chatbot VARCHAR(255) DEFAULT 'false',\n    mute VARCHAR(255) DEFAULT 'false',\n    unmute VARCHAR(255) DEFAULT 'false'", 'query', 'connnectpg', "*@user @pp Welcome Bruhhh In @gname.....!!!!!😊👇🏻♥️* \n\n*_GROUP DESCRIPTION_*\n@desc\n\n\n *______________*\n   *Support us by Subscribing*\n*Youtube.com/mhmodsofc*", 'sck1', 'Unknown', '168yORrhd', 'BEGIN', 'delete', '97718zqqluW', " WHERE id = $1 RETURNING *", 'forEach', 'findOne', "Error userdb.updateOne() in user database,\n", " \n        CREATE TABLE IF NOT EXISTS bot_ (\n          id VARCHAR(255) UNIQUE NOT NULL DEFAULT 'ROYAL-MD',\n          alive_text VARCHAR(255) DEFAULT 'Some text',\n          alive_get VARCHAR(255) DEFAULT '*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ*',\n          alive_url VARCHAR(255) DEFAULT 'you didnt set alive message yet',\n          alive_image BOOLEAN DEFAULT false,\n          alive_video BOOLEAN DEFAULT false,\n          permit BOOLEAN DEFAULT false,\n          permit_values VARCHAR(255) DEFAULT 'all',\n          chatbot VARCHAR(255) DEFAULT 'false',\n          bgm BOOLEAN DEFAULT false,\n          bgmarray JSON DEFAULT '{}',\n          plugins JSON DEFAULT '{}',\n          notes JSON DEFAULT '{}',\n          antiviewonce VARCHAR(255) DEFAULT 'true',\n          antidelete VARCHAR(255) DEFAULT 'true',\n          autobio VARCHAR(255) DEFAULT 'false',\n          levelup VARCHAR(255) DEFAULT 'false',\n          autoreaction VARCHAR(255) DEFAULT 'true',\n          anticall VARCHAR(255) DEFAULT 'true',\n          mention JSON DEFAULT '{}',\n          filter JSON DEFAULT '{}',\n          afk JSON DEFAULT '{}',\n          rent JSON DEFAULT '{}'", "Error while find ", '7071317jNquPi', "\n      INSERT INTO ", "Error while collection.drop all user in database,\n", 'utf8', ",\n ", 'count', " SET ", 'rows'];
  _0x3786 = function () {
    return _0x559374;
  };
  return _0x3786();
}
let userdb = {
  "countDocuments": async () => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (isMongodb) {
        return await sck1.countDocuments();
      } else {
        return sqldb && pg ? await pg.countDocuments("sck1") : await dbs.countDocuments('sck1');
      }
    } catch (_0x251a97) {
      console.log("Error from userdb.countDocuments() in user database,\n", _0x251a97);
      return 0x0;
    }
  },
  'new': async _0x3415e7 => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (isMongodb) {
        let _0x3e7164 = (await sck1.findOne({
          'id': _0x3415e7.id
        })) || (await new sck1({
          'id': _0x3415e7.id,
          ..._0x3415e7
        }).save());
        return _0x3e7164;
      } else {
        if (sqldb && pg) {
          var _0x50398f = (await pg.findOne('sck1', {
            'id': _0x3415e7.id
          })) || (await pg['new']("sck1", _0x3415e7));
          return _0x50398f;
        } else {
          var _0x50398f = (await dbs.findOne("sck1", {
            'id': _0x3415e7.id
          })) || (await dbs["new"]("sck1", _0x3415e7));
          return _0x50398f;
        }
      }
    } catch (_0x451f6b) {
      console.log("Error userdb.new() in user database,\n", _0x451f6b);
      return {};
    }
  },
  "findOne": async _0x37e3c0 => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (isMongodb) {
        return await sck1.findOne({
          'id': _0x37e3c0.id
        });
      } else {
        if (sqldb && pg) {
          return await pg.findOne('sck1', _0x37e3c0);
        } else {
          var _0x424442 = await dbs.findOne("sck1", {
            'id': _0x37e3c0.id
          });
          return _0x424442;
        }
      }
    } catch (_0x18ae7d) {
      console.log("Error userdb.findOne() in user database,\n", _0x18ae7d);
      return;
    }
  },
  "find": async _0x2c8925 => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (isMongodb) {
        let _0x572962 = await sck1.find(_0x2c8925);
        return _0x572962;
      } else {
        return sqldb && pg ? await pg.find("sck1", _0x2c8925) : await dbs.find('sck1', _0x2c8925);
      }
    } catch (_0x23fafb) {
      console.log("Error userdb.find() in user database,\n", _0x23fafb);
      return [];
    }
  },
  "updateOne": async (_0x2825b0, _0x27fa7e = {}) => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (!_0x2825b0.id) {
        return {};
      }
      if (isMongodb) {
        return await sck1.updateOne({
          'id': _0x2825b0.id
        }, {
          ..._0x27fa7e
        });
      } else {
        return sqldb && pg ? await pg.updateOne('sck1', {
          'id': _0x2825b0.id
        }, _0x27fa7e) : await dbs.updateOne("sck1", _0x2825b0, _0x27fa7e);
      }
    } catch (_0x30b4cc) {
      console.log("Error userdb.updateOne() in user database,\n", _0x30b4cc);
      return {};
    }
  },
  "findOneAndDelete": async _0x466a27 => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (!_0x466a27.id) {
        return [];
      }
      if (isMongodb) {
        return await sck1.findOneAndDelete({
          'id': _0x466a27.id
        });
      } else {
        return sqldb && pg ? await pg.findOneAndDelete('sck1', _0x466a27) : await dbs.findOneAndDelete("sck1", _0x466a27);
      }
    } catch (_0x4e3146) {
      console.log("Error userdb.findOneAndDelete() in user database,\n", _0x4e3146);
      return null;
    }
  },
  "delete": userdb.findOneAndDelete,
  "collection": {
    'drop': async () => {
      try {
        if (!global.SmdOfficial) {
          return;
        }
        if (isMongodb) {
          return await sck1.collection.drop();
        } else {
          return sqldb && pg ? await pg.collection.drop('sck1') : await dbs.collection.drop('sck1');
        }
      } catch (_0x4cd731) {
        console.log("Error userdb.collection.drop() in user database,\n", _0x4cd731);
        return null;
      }
    }
  }
};
let alivedb = {};
function _0x42af(_0x3a4134, _0x1e1741) {
  const _0x3786e9 = _0x3786();
  _0x42af = function (_0x42afdd, _0x19198d) {
    _0x42afdd = _0x42afdd - 0xaf;
    let _0x4cf29f = _0x3786e9[_0x42afdd];
    return _0x4cf29f;
  };
  return _0x42af(_0x3a4134, _0x1e1741);
}
alivedb.countDocuments = async () => {
  try {
    if (!global.SmdOfficial) {
      return;
    }
    if (isMongodb) {
      return await alive.countDocuments();
    } else {
      return sqldb && pg ? await pg.countDocuments("bot_") : await dbs.countDocuments("bot_");
    }
  } catch (_0x2eb316) {
    console.log("Error while Creating user in database,\n", _0x2eb316);
    return 0x0;
  }
};
alivedb["new"] = async _0x11e280 => {
  try {
    if (!global.SmdOfficial) {
      return;
    }
    if (isMongodb) {
      let _0x1f3d57 = (await alive.findOne({
        'id': _0x11e280.id
      })) || (await new alive({
        'id': _0x11e280.id,
        ..._0x11e280
      }).save());
      return _0x1f3d57;
    } else {
      if (sqldb && pg) {
        var _0x5b74dd = (await pg.findOne("bot_", {
          'id': _0x11e280.id
        })) || (await pg["new"]("bot_", _0x11e280));
        return _0x5b74dd;
      } else {
        var _0x5b74dd = (await dbs.findOne("bot_", {
          'id': _0x11e280.id
        })) || (await dbs["new"]('bot_', _0x11e280));
        return _0x5b74dd;
      }
    }
  } catch (_0x141ccd) {
    console.log("Error while Creating user in database,\n", _0x141ccd);
    return {};
  }
};
alivedb.findOne = async _0x3756e7 => {
  try {
    if (!global.SmdOfficial) {
      return;
    }
    if (isMongodb) {
      return await alive.findOne({
        'id': _0x3756e7.id
      });
    } else {
      if (sqldb && pg) {
        return await pg.findOne("bot_", _0x3756e7);
      } else {
        var _0x59fa2a = await dbs.findOne("bot_", {
          'id': _0x3756e7.id
        });
        return _0x59fa2a;
      }
    }
  } catch (_0x15c8f7) {
    console.log("Error while finding user in database,\n", _0x15c8f7);
    return;
  }
};
alivedb.find = async _0x3eed70 => {
  try {
    if (!global.SmdOfficial) {
      return;
    }
    if (isMongodb) {
      let _0x342c30 = await alive.find(_0x3eed70);
      return _0x342c30;
    } else {
      return sqldb && pg ? await pg.find("bot_", _0x3eed70) : await dbs.find("bot_", _0x3eed70);
    }
  } catch (_0x4e5a37) {
    console.log("Error while finding user in database,\n", _0x4e5a37);
    return [];
  }
};
alivedb.updateOne = async (_0x169d10, _0x29d786 = {}) => {
  try {
    if (!global.SmdOfficial) {
      return;
    }
    if (!_0x169d10.id) {
      return {};
    }
    if (isMongodb) {
      return await alive.updateOne({
        'id': _0x169d10.id
      }, {
        ..._0x29d786
      });
    } else {
      return sqldb && pg ? await pg.updateOne("bot_", {
        'id': _0x169d10.id
      }, _0x29d786) : await dbs.updateOne("bot_", _0x169d10, _0x29d786);
    }
  } catch (_0x5aa95a) {
    console.log("Error while updateOne user in database,\n", _0x5aa95a);
    return {};
  }
};
alivedb.findOneAndDelete = async _0x2ad765 => {
  try {
    if (!global.SmdOfficial) {
      return;
    }
    if (!_0x2ad765.id) {
      return [];
    }
    if (isMongodb) {
      return await alive.findOneAndDelete({
        'id': _0x2ad765.id
      });
    } else {
      return sqldb && pg ? await pg.findOneAndDelete("bot_", _0x2ad765) : await dbs.findOneAndDelete('bot_', _0x2ad765);
    }
  } catch (_0x2ce52d) {
    console.log("Error while findOneAndDelete user in database,\n", _0x2ce52d);
    return null;
  }
};
alivedb['delete'] = alivedb.findOneAndDelete;
alivedb.collection = {
  'drop': async () => {
    try {
      if (!global.SmdOfficial) {
        return;
      }
      if (isMongodb) {
        return await alive.collection.drop();
      } else {
        return sqldb && pg ? await pg.collection.drop('bot_') : await dbs.collection.drop('bot_');
      }
    } catch (_0x50013b) {
      console.log("Error while collection.drop all user in database,\n", _0x50013b);
      return null;
    }
  }
};
module.exports = {
  'pg': pg,
  'dbs': dbs,
  'groupdb': groupdb,
  'userdb': userdb,
  'alivedb': alivedb,
  'bot_': alivedb
};
