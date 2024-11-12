import "./ParallelRunBranch.scss";

interface NodeStructureProps {
  topLineHeight?: number;
  bottomLineHeight?: number;
}

const ParallelRunBranch: React.FC<NodeStructureProps> = () => {
  return (
    <div className="grid-container">
      {/* Top Line */}
      <div className="line top-line">
        <div className="arrow up"></div>
      </div>

      {/* Right Line */}
      <div className="line right-line">
        <div className="arrow right"></div>
      </div>

      {/* Central Content Box */}
      <div className="content-box">
        <p>Scripts 1510</p>
      </div>

      {/* Bottom Line */}
      <div className="line bottom-line">
        <div className="arrow down"></div>
      </div>
    </div>
  );
};

export default ParallelRunBranch;
