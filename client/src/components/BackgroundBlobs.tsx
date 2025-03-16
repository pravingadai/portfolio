export default function BackgroundBlobs() {
  return (
    <>
      <div className="blob bg-primary/20 w-96 h-96 top-20 -left-48 rounded-full fixed" />
      <div className="blob bg-secondary/20 w-96 h-96 bottom-20 -right-48 rounded-full fixed" />
      <div className="blob bg-accent/20 w-96 h-96 top-[40%] right-[30%] rounded-full fixed" />
    </>
  );
}
