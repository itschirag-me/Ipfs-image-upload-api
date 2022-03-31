const IPFS = require("ipfs-api");
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https"
});

exports.ipfsService = async (data) => {
  try {
    const ipfsResponse = await ipfs.files.add(data?.buffer);
    console.log(ipfsResponse);
    return `https://ipfs.infura.io/ipfs/${ipfsResponse[0].hash}`;
  } catch (error) {
    return error.message;
  }
};
