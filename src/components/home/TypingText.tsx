import { SourceCodePro } from "@/fonts/fonts";

const TypingText = () => {
  return (
    <div className={`profetion-text-container ${SourceCodePro.className}`}>
      <div
        className="profetion software-development"
        typing-text="<Software Developer/>" 
        translate="no"
      ></div>
    </div>
  );
};

export default TypingText;
