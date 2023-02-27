function ProjectDetailsVideo({ video }: { video: string }) {
  return (
    <video
      className="w-full rounded-2xl border border-zinc-50 dark:border-zinc-900"
      controls
      muted
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video format
    </video>
  );
}

export default ProjectDetailsVideo;
