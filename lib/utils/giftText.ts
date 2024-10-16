export const GIFT_TYPE = {
  COIN: 2,
  INTEGRAL: 3,
  BAG: 4,
  DRIVE: 5,
  AVATAR: 6,
  TITLE: 7,
  ENTER_ANIMATION: 8,
  RAFFLE_TICKET: 9,
  CHAT_BUUBLE: 10,
  ROOM_TAG: 11,
  TREASURE_SCORE: 12,
  ROOM_STICKER: 13,
  VOICE_ROOM_BG: 14,
  MEDAL: 15,
};

type GiftType = {
  gift_type: number;
  gift_count: number;
  gift_name: string;
  effective_time: number;
};

export default function (
  gift: GiftType,
  {
    timeUnit,
    t,
    isShowName,
  }: {
    timeUnit: string;
    t?: any;
    isShowName: boolean;
  } = {
    timeUnit: 'hour',
    isShowName: true,
  }
) {
  let result: string | number = '';
  if (gift) {
    switch (gift.gift_type) {
      case GIFT_TYPE.COIN:
      case GIFT_TYPE.INTEGRAL:
        result = gift.gift_count;
        break;
      case GIFT_TYPE.BAG:
        result = gift.gift_count;
        break;
      case GIFT_TYPE.AVATAR:
      case GIFT_TYPE.DRIVE:
      case GIFT_TYPE.TITLE:
      case GIFT_TYPE.ENTER_ANIMATION:
      case GIFT_TYPE.CHAT_BUUBLE:
      case GIFT_TYPE.ROOM_TAG:
      case GIFT_TYPE.ROOM_STICKER:
      case GIFT_TYPE.VOICE_ROOM_BG:
      case GIFT_TYPE.MEDAL:
        let seconds = gift.effective_time;
        if (timeUnit === 'hour') {
          let hours = seconds / 60 / 60;
          result = `${hours}h`;
        } else if (timeUnit === 'day') {
          let days = seconds / 60 / 60 / 24;
          result = t('roomTask_reward_days', [days]);
        }
        break;
      case GIFT_TYPE.RAFFLE_TICKET:
        result = gift.gift_count;
        break;
      default:
        result = gift.gift_count;
        break;
    }
  }
  if (isShowName) {
    result = gift.gift_name + '*' + result.toString();
  }
  return result;
}
