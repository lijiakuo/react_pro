import crypto from 'crypto'
const getAes = (str) => {
    let cipher = crypto.createCipher('aes192', '1511');
    let dec = cipher.update(str, 'utf-8', 'hex')
    dec = cipher.final('hex');
    return dec;
}
const getDeAes = (str) => {
    let deCipher = crypto.createDecipher('aes192', '1511')
    let dec = deCipher.update(str, 'hex', 'utf-8', )
    dec = deCipher.final('utf-8');
    return dec;
}
export {
    getAes,
    getDeAes

}