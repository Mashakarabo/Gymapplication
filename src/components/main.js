import backgroundvid from '../assets/cimatic.mp4';
import warmupgif from '../assets/warmupgif.gif';
import warmupgif2 from '../assets/warmupgif2.gif';
import warmupgif3 from '../assets/warmupgif3.gif';
import workoutpic from '../assets/workoutpic.png';


function Main(){
    return(
        <div className="main-content">
        <section id="section-1" >
        <video src={backgroundvid} autoPlay loop muted />
        <div className="content">
          <h1>Daily Workouts</h1>
          <p>Live a Healthy Life Today</p>
          
        </div>
        <div className="overlay"></div>
        
      </section>
      

      <section id="section-2">
      <div className="Warmup-container">
        <div className="content-one">
          <img src={warmupgif} width={300} />
          <h1 id="warmupheading">Side-lying rotation</h1>
          <p>Lie on your left side with your right hip flexed and your right knee bent. Your arms should be straight out in front of you with your palms together.
            Rotate through the middle of your back, opening up your chest and right arm in an arching motion, until your right hand nearly touches the floor on the opposite side.
            Rotate back to the starting position and repeat for the suggested number of reps. Repeat on the other side, flexing the left hip and left knee.
            </p>
            <button>Click for more</button>
        </div>

        <div className="content-two">
          <img src={warmupgif2} width={300} />
          <h1 id="warmupheading">Lat stretch</h1>
            <p>Standing an arm’s length away, grab a secure surface (an upright bench, a door frame, or a post) with your right arm at shoulder level. Your feet should be about hip width apart.
              Slowly sink your hips down and back until you feel a mild stretch in the muscles under your armpit and the big muscles running along the side of your spine. Let your head and upper body bend forward toward the secure surface.
              Hold the stretch for the suggested amount of time before switching to the left side.
              </p>
              <button>Click for more</button>
        </div>

        <div className="content-three">
          <img src={warmupgif3} width={300} />
          <h1 id="warmupheading">Arm crosses</h1>
            <p>Stand with your feet hip width apart and your arms out to the side at shoulder level, with the elbows straight.
            Move your arms inward and make an “X” motion, crossing your arms in front of your chest.
            Bring the arms back out to the starting position, and continue crossing the arms in and out for the suggested number of reps.
            </p>
            <button>Click for more</button>

        </div>
        
        
      </div>
        
      </section>

      <section id="section-3">
      <div className="workout-content">
        <div className="workout-content-one">
        <img src={workoutpic} width={400} />
        </div>
        <div className="workout-content-two">
          <h1 id="warmupheading">AEROBIC ACTIVITY</h1>
        <p>
          Aerobic activity moves your large muscles, such as those in your arms and legs.Aerobic activity is called endurance activity.
          Aerobics makes your heart beat faster than usual. you aslo breath harder during this type of activity. over time, regular aerobic
          activity makes your heart and lungs stronger and able to work better. intensity levels of aerobic activity include: light-intensity activitirs,
          moderate-intensity activities and vigorous-intensity activities
        </p>
        <h1 id="warmupheading">BONE-STRENGTHENING ACTIVITY</h1>
        <p>
          With bone-strengthening activities, your feet, legs, or arms support your body's weight, and your muscles push against your bones.
          This helps make your bones strong, Running,Walking, Jumping rope, and lifting weights are examples of bone-strengthening activities.
        </p>
        <h1 id="warmupheading">MUSCLE-STRENGTHENING ACTIVITY</h1>
        <p>
          Muscle-strengthening activities improve the strength, power, and endurance of your muscles.Doing pushups and situps, lifting weights, climbing stairs, and 
          digging in the garden are examples of muscle-strengthening activities
        </p>
        </div>

      </div>
        
      </section>

      <section id="section-4">
        
      <div className="Meals-container">
          <div className="Parent">
          <h1>GYM DIET PLAN CHART - DAY 1</h1>
            <div className="Breakfast">
            <h2>Breakfast</h2>
            <p>Oats Banana Panckes with Protein Shake</p>
            </div>
            <div className="Lunch">
            <h2>Lunch</h2>
            <p>Multigrain roti along with Palak chicken and Avocado bell Pepper Salad</p>
            </div>
            <div className="pre-workout-snack">
            <h2>Pre-Workout Snack</h2>
            <p>Bananas</p>
            </div>
            <div className="dinner">
            <h2>Dinner(Post-workout)</h2>
            <p>Brown rice Peas Paneer Curry Sprouts Vegetable Salad</p>
            </div>

          </div>
          
          <div className="Child">
          <h1>GYM DIET PLAN CHART - DAY 2</h1>
            <div className="Breakfast">
            <h2>Breakfast</h2>
            <p>Oatmeal with Greek Yogurt & Seasonal fruits Mango Juice</p>
            </div>
            <div className="Lunch">
            <h2>Lunch</h2>
            <p>Multigrain roti Fish Curry Vegetable Salad</p>
            </div>
            <div className="pre-workout-snack">
            <h2>Pre-Workout Snack</h2>
            <p>Toast with Jam</p>
            </div>
            <div className="dinner">
            <h2>Dinner(Post-workout)</h2>
            <p>Brown Whets khichidi along with Carrot raita Egg white Vegetable Salad </p>
            </div>

          </div>
      </div>
      <div className="Meals-container">
          <div className="Parent">
          <h1>GYM DIET PLAN CHART - DAY 3</h1>
            <div className="Breakfast">
            <h2>Breakfast</h2>
            <p>Poached Eggs Whole Grain Toast Protein Shake</p>
            </div>
            <div className="Lunch">
            <h2>Lunch</h2>
            <p>Quinoa upma chicken and Broccoli Salad</p>
            </div>
            <div className="pre-workout-snack">
            <h2>Pre-Workout Snack</h2>
            <p>Mixed Nuts & Dried Fruits</p>
            </div>
            <div className="dinner">
            <h2>Dinner(Post-workout)</h2>
            <p>Lean Beef and Vegetab;le Curry Brown rice Cucumber raita Baby Potatoes Chocolate Milk</p>
            </div>

          </div>
          
          <div className="Child">
          <h1>GYM DIET PLAN CHART - DAY 4</h1>
            <div className="Breakfast">
            <h2>Breakfast</h2>
            <p>Oatmeal with Honey Apple Juice</p>
            </div>
            <div className="Lunch">
            <h2>Lunch</h2>
            <p>Grilled Chicken Salad Whole Grain Bread</p>
            </div>
            <div className="pre-workout-snack">
            <h2>Pre-Workout Snack</h2>
            <p>Toast with Peanut Butter</p>
            </div>
            <div className="dinner">
            <h2>Dinner(Post-workout)</h2>
            <p>Methi Chicken Brown Rice Broccoli Protein Shake </p>
            </div>

          </div>
      </div>
        
      </section>
        
      </div>
    
    
    )
}

export default Main;