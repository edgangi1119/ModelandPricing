import { Play, FileText, User, Target, TrendingUp } from "lucide-react";
import Button from "./ui/Button";

export default function CallRecordingPlayer({
  caller,
  callerBackground,
  target,
  outcome,
}) {
  return (
    <div className="border-2 border-black rounded-2xl p-6 bg-white">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <User className="w-5 h-5 text-[#1b786f] flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-black">Caller:</p>
            <p className="text-[#515151]">
              {caller} - {callerBackground}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Target className="w-5 h-5 text-[#1b786f] flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-black">Target:</p>
            <p className="text-[#515151]">{target}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-[#1b786f] flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-black">Outcome:</p>
            <p className="text-[#515151]">{outcome}</p>
          </div>
        </div>

        {/* Audio Player Mockup */}
        <div className="mt-6 pt-6 border-t-2 border-[#e6e6e6]">
          <div className="flex items-center gap-4 p-4 bg-[#f8f8f8] rounded-xl">
            <button className="size-12 rounded-full bg-[#1b786f] flex items-center justify-center hover:bg-[#156359] transition-all active:scale-95 shadow-sm">
              <Play className="size-6 text-white fill-white ml-1" />
            </button>

            <div className="flex-1">
              <div className="h-2 bg-[#e6e6e6] rounded-full">
                <div className="h-2 bg-[#1b786f] rounded-full w-1/3"></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-[#6b7280]">
                <span>1:23</span>
                <span>4:15</span>
              </div>
            </div>

            <Button variant="outline" size="sm">
              <FileText className="size-4" />
              Transcript
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
