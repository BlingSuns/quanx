//API:http://ip-api.com/json

if ($response.statusCode != 200) {
  $done(null);
}

const code0 = 'UN';
const city0 = 'GOTHAM';
const isp0 = 'BREAKWALL ORG';
const country0 = 'United Nations';

function Code_ValidCheck(para) {
  if (para) {
    return para;
  } else {
    return code0;
  }
}

function City_ValidCheck(para) {
  if (para) {
    return para;
  } else {
    return city0;
  }
}

function ISP_ValidCheck(para) {
  if (para) {
    return para;
  } else {
    return isp0;
  }
}

function Area_check(para) {
  if (para) {
    return para;
  } else {
    return country0;
  }
}

var flags = new Map([
  ['AC', '🇦🇨'],
  ['AF', '🇦🇫'],
  ['AI', '🇦🇮'],
  ['AL', '🇦🇱'],
  ['AM', '🇦🇲'],
  ['AQ', '🇦🇶'],
  ['AR', '🇦🇷'],
  ['AS', '🇦🇸'],
  ['AT', '🇦🇹'],
  ['AU', '🇦🇺'],
  ['AW', '🇦🇼'],
  ['AX', '🇦🇽'],
  ['AZ', '🇦🇿'],
  ['BB', '🇧🇧'],
  ['BD', '🇧🇩'],
  ['BE', '🇧🇪'],
  ['BF', '🇧🇫'],
  ['BG', '🇧🇬'],
  ['BH', '🇧🇭'],
  ['BI', '🇧🇮'],
  ['BJ', '🇧🇯'],
  ['BM', '🇧🇲'],
  ['BN', '🇧🇳'],
  ['BO', '🇧🇴'],
  ['BR', '🇧🇷'],
  ['BS', '🇧🇸'],
  ['BT', '🇧🇹'],
  ['BV', '🇧🇻'],
  ['BW', '🇧🇼'],
  ['BY', '🇧🇾'],
  ['BZ', '🇧🇿'],
  ['CA', '🇨🇦'],
  ['CF', '🇨🇫'],
  ['CH', '🇨🇭'],
  ['CK', '🇨🇰'],
  ['CL', '🇨🇱'],
  ['CM', '🇨🇲'],
  ['CN', '🇨🇳'],
  ['CO', '🇨🇴'],
  ['CP', '🇨🇵'],
  ['CR', '🇨🇷'],
  ['CU', '🇨🇺'],
  ['CV', '🇨🇻'],
  ['CW', '🇨🇼'],
  ['CX', '🇨🇽'],
  ['CY', '🇨🇾'],
  ['CZ', '🇨🇿'],
  ['DE', '🇩🇪'],
  ['DG', '🇩🇬'],
  ['DJ', '🇩🇯'],
  ['DK', '🇩🇰'],
  ['DM', '🇩🇲'],
  ['DO', '🇩🇴'],
  ['DQ', '🌍'],
  ['DZ', '🇩🇿'],
  ['EA', '🇪🇦'],
  ['EC', '🇪🇨'],
  ['EE', '🇪🇪'],
  ['EG', '🇪🇬'],
  ['EH', '🇪🇭'],
  ['ER', '🇪🇷'],
  ['ES', '🇪🇸'],
  ['ET', '🇪🇹'],
  ['EU', '🇪🇺'],
  ['FI', '🇫🇮'],
  ['FJ', '🇫🇯'],
  ['FK', '🇫🇰'],
  ['FM', '🇫🇲'],
  ['FO', '🇫🇴'],
  ['FR', '🇫🇷'],
  ['GA', '🇬🇦'],
  ['GB', '🇬🇧'],
  ['HK', '🇭🇰'],
  ['ID', '🇮🇩'],
  ['IE', '🇮🇪'],
  ['IL', '🇮🇱'],
  ['IM', '🇮🇲'],
  ['IN', '🇮🇳'],
  ['IS', '🇮🇸'],
  ['IT', '🇮🇹'],
  ['JP', '🇯🇵'],
  ['KR', '🇰🇷'],
  ['MO', '🇲🇴'],
  ['MX', '🇲🇽'],
  ['MY', '🇲🇾'],
  ['NL', '🇳🇱'],
  ['PH', '🇵🇭'],
  ['RO', '🇷🇴'],
  ['RS', '🇷🇸'],
  ['RU', '🇷🇺'],
  ['RW', '🇷🇼'],
  ['SA', '🇸🇦'],
  ['SB', '🇸🇧'],
  ['SC', '🇸🇨'],
  ['SD', '🇸🇩'],
  ['SE', '🇸🇪'],
  ['SG', '🇸🇬'],
  ['TH', '🇹🇭'],
  ['TN', '🇹🇳'],
  ['TO', '🇹🇴'],
  ['TR', '🇹🇷'],
  ['TV', '🇹🇻'],
  ['TW', '🇨🇳'],
  ['UK', '🇬🇧'],
  ['UM', '🇺🇲'],
  ['UN', '🇺🇳'],
  ['US', '🇺🇸'],
  ['UY', '🇺🇾'],
  ['UZ', '🇺🇿'],
  ['VA', '🇻🇦'],
  ['VE', '🇻🇪'],
  ['VG', '🇻🇬'],
  ['VI', '🇻🇮'],
  ['VN', '🇻🇳'],
  ['ZA', '🇿🇦'],
]);
var body = $response.body;
var obj = JSON.parse(body);
var isp = ISP_ValidCheck(obj['isp'] || obj['org']);
var title = flags.get(Code_ValidCheck(obj['countryCode'])) + ' ' + Area_check(obj['country']);
var subtitle = '✈️ ' + City_ValidCheck(obj['city']) + '-' + isp;
var ip = obj['query'];
var description = 'ISP:' + isp + '\n' + 'LOC:' + City_ValidCheck(obj['regionName']) + '\n' + 'IP:' + obj['query'] + '\n' + 'TZ:' + obj['timezone'];
$done({ title, subtitle, ip, description });
