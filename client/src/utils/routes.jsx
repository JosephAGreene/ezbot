// Import Icons
import SettingsIcon from '@material-ui/icons/Settings';
import BuildIcon from '@material-ui/icons/Build';
import {FaRobot } from 'react-icons/fa';
import HomeIcon from '@material-ui/icons/Home';
import { FiCommand, FiLink } from 'react-icons/fi';
import { FaUserSecret, FaBookReader} from 'react-icons/fa';
import { ImBullhorn } from "react-icons/im";
import GavelIcon from '@material-ui/icons/Gavel';

// Import Components
import Stash from "../views/dashboard/Stash";
import NewBot from "../views/dashboard/NewBot";
import Settings from "../views/settings/Settings";
import Invite from "../views/settings/Invite";
import Modules from "../views/modules/Modules";
import CustomCommands from '../views/modules/CustomCommands';
import CustomCommandSingle from '../views/modules/CustomCommandSingle';
import CustomCommandOptioned from '../views/modules/CustomCommandOptioned';
import CustomCommandRandom from '../views/modules/CustomCommandRandom';
import Moderation from '../views/modules/Moderation';
import ModerationHelp from '../views/modules/ModerationHelp';
import ModerationBan from '../views/modules/ModerationBan';
import ModerationSoftBan from '../views/modules/ModerationSoftBan';
import ModerationKick from '../views/modules/ModerationKick';
import ModerationPing from '../views/modules/ModerationPing';
import ModerationPurge from '../views/modules/ModerationPurge';
import AutoModeration from '../views/modules/AutoModeration';
import AutoModAutoRoles from '../views/modules/AutoModAutoRoles';
import AutoModBannedWords from '../views/modules/AutoModBannedWords';
import AutoModInviteLinks from '../views/modules/AutoModInviteLinks';
import AutoModMassCaps from '../views/modules/AutoModMassCaps';
import AutoModMassMentions from '../views/modules/AutoModMassMentions';
import Announcements from '../views/modules/Announcements';
import GettingStarted from '../views/documents/GettingStarted';

const routes = [
  {
    name: 'hidden', // Do not display header/name
    path: 'stash',
    children: [
      { path: 'stash/mybots', name: 'Stashed Bots', icon: <FaRobot />, component: Stash },
      { path: 'stash/newbot', name: 'Add New Bot', icon: <BuildIcon />, component: NewBot},
    ],
  },
  {
    name: 'Documentation',
    path: "stash",
    children: [
      { path: 'stash/documentation/gettingstarted', name: 'Getting Started', icon: <FaBookReader />, component: GettingStarted },
    ],
  },
  {
    name: 'hidden', // Do not display header/name
    path: 'develop',
    children: [
      { path: 'develop/modules', name: 'Modules', icon: <HomeIcon />, component: Modules },
      { path: 'develop/settings', name: 'Settings', icon: <SettingsIcon />, api: "bot", component: Settings },
      { path: 'develop/invite', name: 'Invite Link', icon: <FiLink />, api: "bot", component: Invite },
    ]
  },
  {
    name: "Develop",
    path: 'develop',
    children: [
      { path: 'develop/moderation', name: 'Moderation', icon: <GavelIcon />, api: "bot", component: Moderation },
      { path: 'develop/automoderation', name: 'Auto Moderation', icon: <FaUserSecret />, api: "bot", component: AutoModeration },
      { path: 'develop/customcommands', name: 'Custom Commands', icon: <FiCommand />, api: "bot", component: CustomCommands },
      { path: 'develop/announcements', name: 'Announcements', icon: <ImBullhorn />, api: "bot", component: Announcements },
    ],
  },
  {
    name: 'Develop', 
    path: 'develop', 
    internal: true,  // Denotes internal routes, will not automatically display on any visible navigation
    children: [
      { path: 'develop/moderation/ban', api: "bot", component: ModerationBan },
      { path: 'develop/moderation/help', api: "bot", component: ModerationHelp },
      { path: 'develop/moderation/softban', api: "bot", component: ModerationSoftBan },
      { path: 'develop/moderation/kick', api: "bot", component: ModerationKick },
      { path: 'develop/moderation/ping', api: "bot", component: ModerationPing },
      { path: 'develop/moderation/purge', api: "bot", component: ModerationPurge },
      { path: 'develop/automoderation/autoroles', api: "bot", component: AutoModAutoRoles },
      { path: 'develop/automoderation/bannedwords', api: "bot", component: AutoModBannedWords },
      { path: 'develop/automoderation/invitelinks', api: "bot", component: AutoModInviteLinks },
      { path: 'develop/automoderation/masscaps', api: "bot", component: AutoModMassCaps },
      { path: 'develop/automoderation/massmentions', api: "bot", component: AutoModMassMentions },
      { path: 'develop/customcommands/single', api: "bot", component: CustomCommandSingle },
      { path: 'develop/customcommands/optioned', api: "bot", component: CustomCommandOptioned },
      { path: 'develop/customcommands/random', api: "bot", component: CustomCommandRandom },
    ]
  }
];

export default routes;