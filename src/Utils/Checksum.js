export function ChecksumTotal(value) {
    const Checksum = (7 * (parseInt(value.charAt(0), 10) +
        parseInt(value.charAt(3), 10) + parseInt(value.charAt(6), 10))) +
        (3 * (parseInt(value.charAt(1), 10) +
            parseInt(value.charAt(4), 10) + parseInt(value.charAt(7), 10))) +
        (9 * (parseInt(value.charAt(2), 10) +
            parseInt(value.charAt(5), 10) + parseInt(value.charAt(8), 10)))
    return Checksum === 160
}