import React, { useEffect, useState } from "react";
import { planData } from "../../constants";
import { PlanDetails } from "../../constants/types";
import { FaCreditCard } from "react-icons/fa6";
import { GiCircle } from "react-icons/gi";
import "./style.scss";
import MilegeIcon from "../../images/milege.svg";
import LockIcon from "../../images/Lock.svg";
import LocationIcon from "../../images/location.svg";
import { IoIosArrowDown } from "react-icons/io"
import { json } from "stream/consumers";
import { useAppDispatch, useAppSelector } from "../../hook";
import { updateCardDetails } from "../../store/slices/appSlice";


const Subscription: React.FC = () => {
  const [ selectedMates, setSelectedMates ] = useState<string>('Best mates');

  const handleSelectedMate = (plan: string) => {
    setSelectedMates(plan);
  }

  const dispatch = useAppDispatch();
  const cardDetails = useAppSelector(state => state.app.cardDetails);
  const devices = useAppSelector(state => state.app.devices);

  const handleCardDetails = (value:string, detail: string) => {
    const appState = JSON.parse(localStorage.getItem('appState') as any);

    if(detail === 'cvv' && value.length <= 3){
      dispatch(updateCardDetails({...appState.cardDetails, [detail]: value }));
    }

    if(detail === 'number' && typeof parseInt(value) === 'number' && value.length <= 16){
      dispatch(updateCardDetails({...appState.cardDetails, [detail]: value }));
    }

    if((detail === 'expireYear' || detail === 'expireMonth') && value.length <= 2){
      dispatch(updateCardDetails({...appState.cardDetails, [detail]: value }));
    }
  }

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify({cardDetails, devices}));
  },[]);

  return (
    <>
      <div className="landing-section">
        <div className="step-selection">
          <div className={`step-links`}>
            <span>Subscription</span>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="landing-header">
          <h2>Subscription plan</h2>
          <span>Select the ideal subscription plan for your listing.</span>
        </div>
        <div className="landing-body">
          <p className="plan-heading">Select your plan</p>
          <div className="plan-select-box">
            {planData.map(
              ({
                planName,
                mileageDetail,
                location,
                terms,
                price,
              }: PlanDetails) => (
                <div
                  className={`plan-select ${
                    planName === selectedMates ? "active" : ""
                  }`}
                  onClick={() => handleSelectedMate(planName)}
                >
                  <h3>{planName}</h3>
                  <div className="plan-info">
                    <div>
                      <img src={MilegeIcon} alt="Milege" /> {location}
                    </div>
                    <div>
                      <img src={LocationIcon} alt="Location" />
                      {mileageDetail}
                    </div>
                    <div>
                      <img src={LockIcon} alt="Location" />
                      {terms}
                    </div>
                    <div className="price-info">
                      {price}
                      {price !== "Free" && <span>/ month</span>}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="landing-body">
          <p className="plan-heading">Select add-ons for your subscription</p>

          <div className="plan-select-box">
            <div className="plan-check">
              <p>BYO secondary GPS - $5/month</p>
              <div>
                <GiCircle />
              </div>
            </div>
            {selectedMates === "Good mates" && (
              <div className="plan-check">
                <div>BYO lockbox - $10/month</div>
                <div>
                  <GiCircle />
                </div>
              </div>
            )}
            {selectedMates === "Best mates" && (
              <div className="plan-check">
                <span>Coming soon</span>
                <p>Between trip insurance</p>
                <div>
                  <GiCircle />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="landing-body">
          <div>
            <p className="plan-heading">Add card details</p>
            <div className="card-wrapper">
              <div className="card-box">
                <FaCreditCard />
                <div className="card-input">
                  <input
                    type="text"
                    placeholder="12345678 12345678"
                    value={cardDetails.number}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleCardDetails(event?.target?.value, "number")
                    }
                  />
                  <div
                    style={{ display: "flex", justifyContent: "spaceEvenly" }}
                  >
                    <input
                      type="text"
                      placeholder="MM"
                      value={cardDetails.expireMonth}
                      style={{ width: "25px" }}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleCardDetails(event?.target?.value, "expireMonth")
                      }
                    />
                    <span style={{color: '#4a4a4a66'}}>/</span>
                    <input
                      type="text"
                      placeholder="YY"
                      value={cardDetails.expireYear}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleCardDetails(event?.target?.value, "expireYear")
                      }
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleCardDetails(event?.target?.value, "cvv")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="not-charged">
              You will not be charged right now, Subscription will only start
              once your listing is published and live.
            </p>
          </div>
        </div>
        <div className="landing-body">
          <div className="learn-more">
            <div>
              Learn more about the plans here-{" "}
              <a href="#">What is the right plan for me?</a>
            </div>
            <div>
              You will be able to switch plans easily later as well. Speak to
              our host success team if you need any clarifications.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
