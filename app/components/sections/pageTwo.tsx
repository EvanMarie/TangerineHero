import ContentContainer from "../design/contentContainer";
import { PageContainer } from "../design/pageContainer";
import VideoCard from "../design/videoCard";

export default function PageTwo() {
  return (
    <PageContainer>
      <ContentContainer>
        <VideoCard
          title="This is a Great Title"
          videoId="195581267"
          info="This is a fantastic description. It is epic and amazing. It is the best description ever. I love this description. OMG, I cannot get enough of it."
          thumbnail="/images/thumbnails/thumbnailTemp.png"
        />{" "}
      </ContentContainer>
    </PageContainer>
  );
}
