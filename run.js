const _0x4b10c4 = _0x47e6;
(function (_0x155627, _0x313f9f) {
    const _0x23b67c = _0x47e6,
        _0x1b6d6a = _0x155627();
    while (!![]) {
        try {
            const _0x2fa4fa = parseInt(_0x23b67c(0x1ce)) / 0x1 + -parseInt(_0x23b67c(0x1e9)) / 0x2 + parseInt(_0x23b67c(0x1b8)) / 0x3 + -parseInt(_0x23b67c(0x1c8)) / 0x4 * (parseInt(_0x23b67c(0x1cb)) / 0x5) + -parseInt(_0x23b67c(0x1f9)) / 0x6 + parseInt(_0x23b67c(0x1bb)) / 0x7 * (-parseInt(_0x23b67c(0x1c0)) / 0x8) + -parseInt(_0x23b67c(0x1f8)) / 0x9 * (-parseInt(_0x23b67c(0x1ef)) / 0xa);
            if (_0x2fa4fa === _0x313f9f) break;
            else _0x1b6d6a['push'](_0x1b6d6a['shift']());
        } catch (_0x148b35) {
            _0x1b6d6a['push'](_0x1b6d6a['shift']());
        }
    }
}(_0x1b47, 0x3d2cf), require(_0x4b10c4(0x1fd)));

function _0x47e6(_0x8b88c7, _0x57dce7) {
    const _0x1b4769 = _0x1b47();
    return _0x47e6 = function (_0x47e618, _0x6b5437) {
        _0x47e618 = _0x47e618 - 0x1b0;
        let _0x19a075 = _0x1b4769[_0x47e618];
        return _0x19a075;
    }, _0x47e6(_0x8b88c7, _0x57dce7);
}
const {
    default: deltaxcrashConnect,
    makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto,
    getAggregateVotesInPollMessage
} = global['baileys1'], pino = require(_0x4b10c4(0x1cc)), {
    Boom
} = require(_0x4b10c4(0x1e3)), fs = require('fs'), FileType = require(_0x4b10c4(0x1c6)), readline = require('readline'), PhoneNumber = require('awesome-phonenumber'), path = require(_0x4b10c4(0x1dc)), NodeCache = require(_0x4b10c4(0x1db)), {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    await,
    sleep
} = require(_0x4b10c4(0x1b4)), {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid
} = require(_0x4b10c4(0x1cf)), store = makeInMemoryStore({
    'logger': pino()[_0x4b10c4(0x1f1)]({
        'level': _0x4b10c4(0x1b6),
        'stream': 'store'
    })
}), usePairingCode = !![], question = _0xe874db => {
    const _0x4e0fa4 = _0x4b10c4,
        _0x5a3494 = readline['createInterface']({
            'input': process[_0x4e0fa4(0x1d6)],
            'output': process[_0x4e0fa4(0x1ed)]
        });
    return new Promise(_0x4c70b3 => {
        const _0x6dfd22 = _0x4e0fa4;
        _0x5a3494[_0x6dfd22(0x1ec)](_0xe874db, _0x4c70b3);
    });
};

function _0x1b47() {
    const _0x9f90ba = ['.bin', 'downloadAndSaveMediaMessage', 'authState', '179206adUMMH', 'creds', 'split', 'question', 'stdout', '121.0.6167.159', '1690apPqwV', 'sendMessage', 'child', '../', 'getFile', 'status@broadcast', 'Mac Os', 'application/octet-stream', 'sendVideoAsSticker', '23778EbYRza', '1416924XBTSkP', 'decodeJid', 'notify', 'connection.update', './settings', 'from', './session', 'msg', 'base64', 'key', './lib/storage', 'type', 'silent', 'mimetype', '769725YxEOIg', 'ephemeralMessage', 'Tersambung Kembali', '70UmrHRe', 'packname', 'readFileSync', 'log', 'replace', '74072jqaBgW', 'sendText', 'join', 'test', 'bind', 'concat', 'file-type', 'loggedOut', '12052WZlPzt', 'message', 'registered', '195AwxOsf', 'pino', 'sendImageAsSticker', '83356QeaJZP', './lib/exif', 'public', 'error', 'isBuffer', 'downloadMediaMessage', 'remoteJid', 'ext', 'stdin', 'server', 'close', 'SELAMAT DATANG DI DELTA V5 DECRYPT BY STARBOY. SILAHKAN MASUKAN NOMOR WHATSAPP YANG INGIN DI JADIKAN BOT. \x0aAwali dengan 62 bukan 08\x0a', 'fromBuffer', 'node-cache', 'path', 'existsSync', './deltaFive', 'mtype', 'statusCode', 'creds.update', 'alloc', '@hapi/boom', 'chrome', 'serializeM'];
    _0x1b47 = function () {
        return _0x9f90ba;
    };
    return _0x1b47();
}
async function connectToWhatsApp() {
    const _0x8185e9 = _0x4b10c4,
        {
            state: _0x387bad,
            saveCreds: _0xdca641
        } = await useMultiFileAuthState(_0x8185e9(0x1b0)),
        {
            version: _0x50c77e,
            isLatest: _0x3fca14
        } = await fetchLatestBaileysVersion(),
        _0x433073 = new NodeCache(),
        _0xd45f7c = makeWASocket({
            'isLatest': _0x3fca14,
            'keepAliveIntervalMs': 0xc350,
            'printQRInTerminal': !usePairingCode,
            'logger': pino({
                'level': 'silent'
            }),
            'auth': _0x387bad,
            'browser': [_0x8185e9(0x1f5), _0x8185e9(0x1e4), _0x8185e9(0x1ee)],
            'version': [0x2, 0x96d, 0x1],
            'generateHighQualityLinkPreview': !![],
            'resolveMsgBuffer': _0x433073
        });
    if (usePairingCode && !_0xd45f7c[_0x8185e9(0x1e8)][_0x8185e9(0x1ea)][_0x8185e9(0x1ca)]) {
        const _0x50f089 = await question(_0x8185e9(0x1d9)),
            _0x113ec2 = await _0xd45f7c['requestPairingCode'](_0x50f089['trim']());
        console[_0x8185e9(0x1be)]('INI CODENYA BRO : ' + _0x113ec2);
    }
    store[_0x8185e9(0x1c4)](_0xd45f7c['ev']), _0xd45f7c['ev']['on']('call', async _0x279ba4 => {
        const _0xa9c012 = _0x8185e9;
        console[_0xa9c012(0x1be)]('not call');
    }), _0xd45f7c[_0x8185e9(0x1fa)] = _0x3b907f => {
        const _0x246642 = _0x8185e9;
        if (!_0x3b907f) return _0x3b907f;
        if (/:\d+@/gi [_0x246642(0x1c3)](_0x3b907f)) {
            let _0x5442c9 = jidDecode(_0x3b907f) || {};
            return _0x5442c9['user'] && _0x5442c9[_0x246642(0x1d7)] && _0x5442c9['user'] + '@' + _0x5442c9[_0x246642(0x1d7)] || _0x3b907f;
        } else return _0x3b907f;
    }, _0xd45f7c[_0x8185e9(0x1f3)] = async (_0x5a6023, _0x2c90e5) => {
        const _0x537883 = _0x8185e9;
        let _0x2d3e05, _0x430f29 = Buffer[_0x537883(0x1d2)](_0x5a6023) ? _0x5a6023 : /^data:.*?\/.*?;base64,/i [_0x537883(0x1c3)](_0x5a6023) ? Buffer['from'](_0x5a6023[_0x537883(0x1eb)]
                `,` [0x1], _0x537883(0x1b2)) : /^https?:\/\// [_0x537883(0x1c3)](_0x5a6023) ? await (_0x2d3e05 = await getBuffer(_0x5a6023)) : fs[_0x537883(0x1dd)](_0x5a6023) ? (filename = _0x5a6023, fs[_0x537883(0x1bd)](_0x5a6023)) : typeof _0x5a6023 === 'string' ? _0x5a6023 : Buffer['alloc'](0x0),
            _0x106318 = await FileType[_0x537883(0x1da)](_0x430f29) || {
                'mime': _0x537883(0x1f6),
                'ext': _0x537883(0x1e6)
            };
        filename = path[_0x537883(0x1c2)](__filename, _0x537883(0x1f2) + new Date() * 0x1 + '.' + _0x106318[_0x537883(0x1d5)]);
        if (_0x430f29 && _0x2c90e5) fs['promises']['writeFile'](filename, _0x430f29);
        return {
            'res': _0x2d3e05,
            'filename': filename,
            'size': await getSizeMedia(_0x430f29),
            ..._0x106318,
            'data': _0x430f29
        };
    }, _0xd45f7c[_0x8185e9(0x1d3)] = async _0x4780c8 => {
        const _0x770f9f = _0x8185e9;
        let _0x559055 = (_0x4780c8[_0x770f9f(0x1b1)] || _0x4780c8)[_0x770f9f(0x1b7)] || '',
            _0x27f360 = _0x4780c8['mtype'] ? _0x4780c8[_0x770f9f(0x1df)][_0x770f9f(0x1bf)](/Message/gi, '') : _0x559055[_0x770f9f(0x1eb)]('/')[0x0];
        const _0x258943 = await downloadContentFromMessage(_0x4780c8, _0x27f360);
        let _0x15d267 = Buffer[_0x770f9f(0x1fe)]([]);
        for await (const _0x1bde03 of _0x258943) {
            _0x15d267 = Buffer['concat']([_0x15d267, _0x1bde03]);
        }
        return _0x15d267;
    }, _0xd45f7c[_0x8185e9(0x1c1)] = (_0x4cd110, _0x4f30c5, _0xa2ff41 = '', _0xbdec5f) => _0xd45f7c[_0x8185e9(0x1f0)](_0x4cd110, {
        'text': _0x4f30c5,
        ..._0xbdec5f
    }, {
        'quoted': _0xa2ff41
    }), _0xd45f7c[_0x8185e9(0x1cd)] = async (_0x40da41, _0x5df898, _0x29e1bf, _0x7c4410 = {}) => {
        const _0x36b69e = _0x8185e9;
        let _0x16691c = Buffer[_0x36b69e(0x1d2)](_0x5df898) ? _0x5df898 : /^data:.*?\/.*?;base64,/i ['test'](_0x5df898) ? Buffer[_0x36b69e(0x1fe)](_0x5df898['split']
                `,` [0x1], _0x36b69e(0x1b2)) : /^https?:\/\// [_0x36b69e(0x1c3)](_0x5df898) ? await await getBuffer(_0x5df898) : fs[_0x36b69e(0x1dd)](_0x5df898) ? fs[_0x36b69e(0x1bd)](_0x5df898) : Buffer['alloc'](0x0),
            _0x4ca499;
        return _0x7c4410 && (_0x7c4410[_0x36b69e(0x1bc)] || _0x7c4410['author']) ? _0x4ca499 = await writeExifImg(_0x16691c, _0x7c4410) : _0x4ca499 = await imageToWebp(_0x16691c), await _0xd45f7c[_0x36b69e(0x1f0)](_0x40da41, {
            'sticker': {
                'url': _0x4ca499
            },
            ..._0x7c4410
        }, {
            'quoted': _0x29e1bf
        }), _0x4ca499;
    }, _0xd45f7c[_0x8185e9(0x1f7)] = async (_0x2981a1, _0x38bd5c, _0x3dad33, _0x199b32 = {}) => {
        const _0x12ae47 = _0x8185e9;
        let _0x2ca2c9 = Buffer['isBuffer'](_0x38bd5c) ? _0x38bd5c : /^data:.*?\/.*?;base64,/i [_0x12ae47(0x1c3)](_0x38bd5c) ? Buffer[_0x12ae47(0x1fe)](_0x38bd5c[_0x12ae47(0x1eb)]
                `,` [0x1], _0x12ae47(0x1b2)) : /^https?:\/\// ['test'](_0x38bd5c) ? await await getBuffer(_0x38bd5c) : fs[_0x12ae47(0x1dd)](_0x38bd5c) ? fs['readFileSync'](_0x38bd5c) : Buffer[_0x12ae47(0x1e2)](0x0),
            _0x4862ac;
        return _0x199b32 && (_0x199b32[_0x12ae47(0x1bc)] || _0x199b32['author']) ? _0x4862ac = await writeExifVid(_0x2ca2c9, _0x199b32) : _0x4862ac = await videoToWebp(_0x2ca2c9), await _0xd45f7c[_0x12ae47(0x1f0)](_0x2981a1, {
            'sticker': {
                'url': _0x4862ac
            },
            ..._0x199b32
        }, {
            'quoted': _0x3dad33
        }), _0x4862ac;
    }, _0xd45f7c[_0x8185e9(0x1e7)] = async (_0x13a38e, _0x2f1b55, _0x52d3ce = !![]) => {
        const _0x23f879 = _0x8185e9;
        let _0x384961 = _0x13a38e['msg'] ? _0x13a38e[_0x23f879(0x1b1)] : _0x13a38e,
            _0x1a2d41 = (_0x13a38e[_0x23f879(0x1b1)] || _0x13a38e)[_0x23f879(0x1b7)] || '',
            _0x76171e = _0x13a38e[_0x23f879(0x1df)] ? _0x13a38e['mtype']['replace'](/Message/gi, '') : _0x1a2d41[_0x23f879(0x1eb)]('/')[0x0];
        const _0x1e8608 = await downloadContentFromMessage(_0x384961, _0x76171e);
        let _0x3fadf7 = Buffer['from']([]);
        for await (const _0x173f9 of _0x1e8608) {
            _0x3fadf7 = Buffer[_0x23f879(0x1c5)]([_0x3fadf7, _0x173f9]);
        }
        let _0x361f38 = await FileType[_0x23f879(0x1da)](_0x3fadf7);
        return trueFileName = _0x52d3ce ? _0x2f1b55 + '.' + _0x361f38['ext'] : _0x2f1b55, await fs['writeFileSync'](trueFileName, _0x3fadf7), trueFileName;
    }, _0xd45f7c['ev']['on']('messages.upsert', async _0x19d55c => {
        const _0x1b2645 = _0x8185e9;
        try {
            mek = _0x19d55c['messages'][0x0];
            if (!mek['message']) return;
            mek['message'] = Object['keys'](mek[_0x1b2645(0x1c9)])[0x0] === _0x1b2645(0x1b9) ? mek[_0x1b2645(0x1c9)]['ephemeralMessage'][_0x1b2645(0x1c9)] : mek['message'];
            if (mek[_0x1b2645(0x1b3)] && mek[_0x1b2645(0x1b3)][_0x1b2645(0x1d4)] === _0x1b2645(0x1f4)) return;
            if (!_0xd45f7c[_0x1b2645(0x1d0)] && !mek[_0x1b2645(0x1b3)]['fromMe'] && _0x19d55c[_0x1b2645(0x1b5)] === _0x1b2645(0x1fb)) return;
            if (mek[_0x1b2645(0x1b3)]['id']['startsWith']('BAE5') && mek[_0x1b2645(0x1b3)]['id']['length'] === 0x10) return;
            m = smsg(_0xd45f7c, mek, store), require(_0x1b2645(0x1de))(_0xd45f7c, m, _0x19d55c, store);
        } catch (_0x1747a2) {
            console[_0x1b2645(0x1be)](_0x1747a2);
        }
    }), _0xd45f7c[_0x8185e9(0x1d0)] = !![], _0xd45f7c[_0x8185e9(0x1e5)] = _0x51bcde => smsg(_0xd45f7c, _0x51bcde, store), _0xd45f7c['ev']['on'](_0x8185e9(0x1fc), _0x5047ae => {
        const _0x3c415d = _0x8185e9,
            {
                connection: _0x277adc,
                lastDisconnect: _0x4cdcb6
            } = _0x5047ae;
        if (_0x277adc === _0x3c415d(0x1d8)) _0x4cdcb6[_0x3c415d(0x1d1)]?. ['output']?. [_0x3c415d(0x1e0)] !== DisconnectReason[_0x3c415d(0x1c7)] ? connectToWhatsApp() : '';
        else _0x277adc === 'open' && console[_0x3c415d(0x1be)](_0x3c415d(0x1ba));
        console['log'](_0x5047ae);
    }), _0xd45f7c['ev']['on'](_0x8185e9(0x1e1), _0xdca641);
}
connectToWhatsApp();