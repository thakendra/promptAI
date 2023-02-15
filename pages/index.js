import MainHeader from "../components/main-header";
import UnleashCreativityContainer from "../components/unleash-creativity-container";
import PopularDesignsContainer from "../components/popular-designs-container";
import AITrainersContainer from "../components/a-i-trainers-container";
import PromptIdeasContainer from "../components/prompt-ideas-container";
import SubscribeForm from "../components/subscribe-form";
import styles from "./index.module.css";

const FitnessLandingPage = () => {
  return (
    <div className={styles.fitnesslandingpage}>
      <MainHeader />
      <UnleashCreativityContainer />
      <PopularDesignsContainer />
      <AITrainersContainer />
      <PromptIdeasContainer />
      <SubscribeForm />
    </div>
  );
};

export default FitnessLandingPage;
