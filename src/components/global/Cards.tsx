import { SaveIcon } from '../icons/SystemIcons';

export interface ICard {
  id: number;
  title: string;
  image: string;
  isSaved: boolean;
}

export interface ILargeCard extends ICard {
  dayCount: number;
  recipeNum: number;
}

export const SmallCard = ({ id, title, image, isSaved }: ICard) => (
  <div className="flex flex-col relative">
    <img className="rounded-xl w-[42vw] max-w-[185px] h-[260px]" src={image} alt={title} />
    <div className="absolute bottom-8 right-2">
      <SaveIcon onClick={() => {}} isActive={isSaved} />
    </div>

    <h1 className="w-full text-left text-sm font-bold text-black mt-1">{title}</h1>
  </div>
);

export const LargeCard = ({ id, title, image, isSaved, dayCount, recipeNum }: ILargeCard) => (
  <div className="relative w-full max-w-[400px] h-60">
    <img className="w-full h-full rounded-3xl brightness-50" src={image} alt={title} />
    <div className="flex flex-col w-full px-6 absolute bottom-6 left-0">
      <h1 className="  font-bold text-xl text-white">{title}</h1>
      <div className="flex items-center justify-between">
        <p className="  font-medium text-xs text-white">
          {dayCount}일 식단 ∙ {recipeNum}개의 레시피
        </p>
        <SaveIcon onClick={() => {}} isActive={isSaved} />
      </div>
    </div>
  </div>
);
