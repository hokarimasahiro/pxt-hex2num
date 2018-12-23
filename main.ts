/**
 * 16進文字列を数値に変換する
 */
//% weight=100 color=#0fbc11 icon=""
namespace hex2number {
    /**
     * TODO: 16進文字列をNUMBERに変換する
     * @param hex 16進文字列。, eg: 1f
     */
    //% block
    export function hex2number(s: string): number {
        let r = 0
        for (let i = 0; i < s.length; i++) {
            if (s.charCodeAt(i) <= 0x39)
                r = (r << 4) + s.charCodeAt(i) - 0x30
            else if (s.charCodeAt(i) <= 0x46)
                r = (r << 4) + s.charCodeAt(i) - 0x41 + 10
            else
                r = (r << 4) + s.charCodeAt(i) - 0x61 + 10
        }
        return r
    }
}
