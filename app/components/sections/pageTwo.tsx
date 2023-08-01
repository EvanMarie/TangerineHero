import ContentContainer from "../design/contentContainer";
import { PageContainer } from "../design/pageContainer";
import VideoCard from "../design/videoCard";

export default function PageTwo() {
  return (
    <PageContainer>
      <ContentContainer>
        <VideoCard
          title="testing"
          videoId="195581267"
          info="al;skdfjas;ldkfjas;dlkfjas;dlkfjasdf"
          thumbnail="/images/thumbnails/thumbnailTemp.png"
        />{" "}
      </ContentContainer>
    </PageContainer>
  );
}
