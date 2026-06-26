import activity from '@/activity.png';
import add from '@/add.png';
import adobe from '@/adobe.png';
import back from '@/back.png';
import canva from '@/canva.png';
import claude from '@/claude.png';
import dropbox from '@/dropbox.png';
import figma from '@/figma.png';
import github from '@/github.png';
import home from '@/home.png';
import medium from '@/medium.png';
import menu from '@/menu.png';
import notion from '@/notion.png';
import openai from '@/openai.png';
import plus from '@/plus.png';
import setting from '@/setting.png';
import spotify from '@/spotify.png';
import wallet from '@/wallet.png';

export const icons = {
  home,
  wallet,
  setting,
  activity,
  add,
  back,
  menu,
  plus,
  notion,
  dropbox,
  openai,
  adobe,
  medium,
  figma,
  spotify,
  github,
  claude,
  canva,
} as const;

export type IconKey = keyof typeof icons;
