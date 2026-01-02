// ===================================
// Mental Reset - Application Logic (Refined)
// ===================================

// ===================================
// Grounding Exercises Database
// ===================================
const GROUNDING_EXERCISES = {
    Overthinking: [
        {
            name: "5-4-3-2-1 Sensory Reset",
            duration: "2 min",
            steps: [
                "Find a comfortable position",
                "Name 5 things you can see around you",
                "Name 4 things you can touch",
                "Name 3 things you can hear",
                "Name 2 things you can smell",
                "Name 1 thing you can taste",
                "Take one more natural breath"
            ]
        },
        {
            name: "Thought Labeling",
            duration: "3 min",
            steps: [
                "Notice the thought that's looping",
                "Label it: 'This is the [work/relationship/future] worry'",
                "Say internally: 'I'm having the thought that...'",
                "Notice it's a thought, not a fact",
                "Return your attention to the present moment",
                "What do you see right now?",
                "What do you hear right now?"
            ]
        }
    ],
    Anxious: [
        {
            name: "Box Breathing",
            duration: "2 min",
            steps: [
                "Find a comfortable position",
                "Breathe in slowly for 4 counts: 1... 2... 3... 4...",
                "Hold for 4 counts: 1... 2... 3... 4...",
                "Breathe out slowly for 4 counts: 1... 2... 3... 4...",
                "Hold for 4 counts: 1... 2... 3... 4...",
                "Repeat this cycle 3 more times",
                "Take one more natural breath"
            ]
        },
        {
            name: "Body Scan Check-in",
            duration: "3 min",
            steps: [
                "Close your eyes or soften your gaze",
                "Notice where tension lives in your body",
                "Is it in your jaw? Your shoulders? Your stomach?",
                "Breathe into that spot",
                "Release the tension on the exhale",
                "Repeat this 2 more times",
                "Notice how you feel now"
            ]
        }
    ],
    Stuck: [
        {
            name: "Perspective Shift",
            duration: "3 min",
            steps: [
                "Take a deep breath",
                "Ask yourself: What would I tell a friend in this situation?",
                "Ask yourself: What will matter about this in 1 year?",
                "Ask yourself: What's one thing I can control right now?",
                "Notice if your perspective has shifted",
                "Take another deep breath"
            ]
        },
        {
            name: "Tiny Next Step",
            duration: "2 min",
            steps: [
                "Think about the situation you're stuck on",
                "What's the smallest possible action you could take?",
                "Can you do it in under 5 minutes?",
                "What's stopping you from starting now?",
                "Notice what comes up",
                "Take a deep breath"
            ]
        }
    ],
    Tired: [
        {
            name: "Energy Audit",
            duration: "3 min",
            steps: [
                "Take a moment to pause",
                "What drained your energy today?",
                "What gave you energy?",
                "What do you need right now?",
                "Can you give yourself that?",
                "Take a deep breath"
            ]
        },
        {
            name: "Permission to Rest",
            duration: "2 min",
            steps: [
                "Say to yourself: 'It's okay to be tired'",
                "Say to yourself: 'Rest is productive'",
                "What's one way you can rest in the next hour?",
                "Notice any resistance to resting",
                "Give yourself permission",
                "Take a deep breath"
            ]
        }
    ],
    Overloaded: [
        {
            name: "Brain Dump Priority",
            duration: "3 min",
            steps: [
                "Take a deep breath",
                "Mentally list everything on your mind",
                "Don't judge, just notice",
                "Now, pick the ONE thing that matters most today",
                "Everything else can wait",
                "Take another deep breath"
            ]
        },
        {
            name: "One Thing Focus",
            duration: "2 min",
            steps: [
                "Take a deep breath",
                "If you could only do one thing today, what would it be?",
                "Can you do that thing in the next 2 hours?",
                "What can you say no to?",
                "Notice the clarity",
                "Take another deep breath"
            ]
        }
    ]
};

// ===================================
// Resolution Options Database
// ===================================
const RESOLUTION_OPTIONS = {
    Overthinking: {
        actionable: [
            "Write it down to get it out of my head",
            "Talk to someone about it",
            "Set a 10-minute timer to think about it, then move on"
        ],
        nonActionable: [
            "The outcome (I can only control my actions)",
            "What others think",
            "The need to figure it all out right now"
        ]
    },
    Anxious: {
        actionable: [
            "Do one grounding exercise when it peaks",
            "Reach out to someone I trust",
            "Move my body for 5 minutes"
        ],
        nonActionable: [
            "Things I can't control",
            "The need to feel certain",
            "Worrying about the future"
        ]
    },
    Stuck: {
        actionable: [
            "Ask one person for input",
            "Make a pros/cons list",
            "Try the smallest version of option A"
        ],
        nonActionable: [
            "Finding the perfect answer",
            "What might go wrong",
            "Needing to know the outcome first"
        ]
    },
    Tired: {
        actionable: [
            "Take a 20-minute break",
            "Say no to one thing today",
            "Go to bed 30 minutes earlier"
        ],
        nonActionable: [
            "Pushing through when I need rest",
            "Guilt about being tired",
            "The need to do everything today"
        ]
    },
    Overloaded: {
        actionable: [
            "Pick the one most important thing",
            "Delegate or postpone one task",
            "Set a boundary with someone"
        ],
        nonActionable: [
            "Doing everything at once",
            "Others' expectations",
            "The need to be perfect"
        ]
    }
};

// ===================================
// Encouragement Messages
// ===================================
const ENCOURAGEMENT = {
    Overthinking: "You paused the loop. That takes awareness.",
    Anxious: "You acknowledged the feeling. That's brave.",
    Stuck: "You chose a direction. Movement matters.",
    Tired: "You listened to yourself. That's wise.",
    Overloaded: "You focused on one thing. That's clarity."
};

// ===================================
// Grounding Subtitles
// ===================================
const GROUNDING_SUBTITLES = {
    Overthinking: "These help quiet the mental noise",
    Anxious: "These help calm your nervous system",
    Stuck: "These help create movement",
    Tired: "These help you check in with yourself",
    Overloaded: "These help you focus"
};

// ===================================
// Bible Verses Database
// ===================================
const BIBLE_VERSES = [
    { text: "Be still, and know that I am God.", reference: "Psalm 46:10" },
    { text: "Do not be anxious about tomorrow, for tomorrow will be anxious for itself.", reference: "Matthew 6:34" },
    { text: "In quietness and trust shall be your strength.", reference: "Isaiah 30:15" },
    { text: "The Lord is near to the brokenhearted and saves the crushed in spirit.", reference: "Psalm 34:18" },
    { text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", reference: "Philippians 4:6-7" },
    { text: "Trust in the Lord with all your heart, and do not lean on your own understanding.", reference: "Proverbs 3:5-6" },
    { text: "Cast all your anxieties on him, because he cares for you.", reference: "1 Peter 5:7" },
    { text: "Peace I leave with you; my peace I give to you.", reference: "John 14:27" },
    { text: "The Lord will fight for you, and you have only to be silent.", reference: "Exodus 14:14" },
    { text: "Come to me, all who labor and are heavy laden, and I will give you rest.", reference: "Matthew 11:28" },
    { text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", reference: "Jeremiah 29:11" },
    { text: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" }
];

// ===================================
// Distress Keywords (for boundary detection)
// ===================================
const DISTRESS_KEYWORDS = [
    'suicide', 'kill myself', 'end it all', 'want to die', 'hurt myself',
    'self harm', 'no point', 'give up', 'can\'t go on', 'hopeless'
];

// ===================================
// Application State
// ===================================
const AppState = {
    currentSession: {
        state: null,
        thought: null,
        control: null,
        resolution: null,
        resolutionType: null,
        helpful: null,
        groundingOffered: false,
        groundingAccepted: false,
        groundingExercise: null
    },
    currentExercise: null,
    currentExerciseStep: 0,

    reset() {
        this.currentSession = {
            state: null,
            thought: null,
            control: null,
            resolution: null,
            resolutionType: null,
            helpful: null,
            groundingOffered: false,
            groundingAccepted: false,
            groundingExercise: null
        };
        this.currentExercise = null;
        this.currentExerciseStep = 0;
    }
};

// ===================================
// Storage Manager
// ===================================
const Storage = {
    // Get all sessions
    getSessions() {
        const data = localStorage.getItem('mentalreset_sessions');
        return data ? JSON.parse(data) : [];
    },

    // Save a new session (metadata only)
    saveSession(sessionData) {
        const sessions = this.getSessions();
        sessions.push({
            state: sessionData.state,
            control: sessionData.control,
            groundingOffered: sessionData.groundingOffered,
            groundingAccepted: sessionData.groundingAccepted,
            groundingExercise: sessionData.groundingExercise,
            resolutionType: sessionData.resolutionType,
            timestamp: new Date().toISOString(),
            helpful: sessionData.helpful
        });
        localStorage.setItem('mentalreset_sessions', JSON.stringify(sessions));
    },

    // Get settings
    getSettings() {
        const data = localStorage.getItem('mentalreset_settings');
        return data ? JSON.parse(data) : {
            tier: 'free',
            sessionCount: 0,
            lastSessionDate: null,
            feedbackPromptShown: false,
            totalSessions: 0
        };
    },

    // Save settings
    saveSettings(settings) {
        localStorage.setItem('mentalreset_settings', JSON.stringify(settings));
    },

    // Check if user can start a new session
    canStartSession() {
        const settings = this.getSettings();

        // Premium users have unlimited access
        if (settings.tier === 'premium') {
            return true;
        }

        // Check if it's a new day
        const today = new Date().toDateString();
        const lastDate = settings.lastSessionDate ? new Date(settings.lastSessionDate).toDateString() : null;

        if (today !== lastDate) {
            // Reset count for new day
            settings.sessionCount = 0;
            settings.lastSessionDate = new Date().toISOString();
            this.saveSettings(settings);
            return true;
        }

        // Check daily limit (3 for free tier)
        return settings.sessionCount < 3;
    },

    // Increment session count
    incrementSessionCount() {
        const settings = this.getSettings();
        settings.sessionCount++;
        settings.totalSessions++;
        settings.lastSessionDate = new Date().toISOString();
        this.saveSettings(settings);
    },

    // Unlock premium
    unlockPremium() {
        const settings = this.getSettings();
        settings.tier = 'premium';
        this.saveSettings(settings);
    },

    // Check if should show feedback prompt
    shouldShowFeedbackPrompt() {
        const settings = this.getSettings();
        return settings.totalSessions >= 5 && !settings.feedbackPromptShown;
    },

    // Mark feedback prompt as shown
    markFeedbackPromptShown() {
        const settings = this.getSettings();
        settings.feedbackPromptShown = true;
        this.saveSettings(settings);
    }
};

// ===================================
// Screen Manager
// ===================================
const ScreenManager = {
    currentScreen: null,

    show(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            this.currentScreen = screenId;
            window.scrollTo(0, 0);
        }
    },

    showHome() {
        this.show('screen-state');
        AppState.reset();
    }
};

// ===================================
// Utility Functions
// ===================================

// Get random Bible verse
function getRandomVerse() {
    return BIBLE_VERSES[Math.floor(Math.random() * BIBLE_VERSES.length)];
}

// Check for distress keywords
function containsDistressKeywords(text) {
    if (!text) return false;
    const lowerText = text.toLowerCase();
    return DISTRESS_KEYWORDS.some(keyword => lowerText.includes(keyword));
}

// Generate summary sentence
function generateSummary(state, control, resolution) {
    if (control === 'Actionable') {
        return `Today, you're taking one step: ${resolution}\n\nThat's enough.`;
    } else {
        return `Today, you're letting go of: ${resolution}\n\nYou can't control everything. That's okay.`;
    }
}

// ===================================
// Grounding Exercise Manager
// ===================================
const ExerciseManager = {
    showGroundingOffer(state) {
        AppState.currentSession.groundingOffered = true;
        ScreenManager.show('screen-grounding-offer');
    },

    showExerciseSelection(state) {
        const exercises = GROUNDING_EXERCISES[state];
        const subtitle = GROUNDING_SUBTITLES[state];

        document.getElementById('groundingSubtitle').textContent = subtitle;

        const container = document.getElementById('exerciseOptions');
        container.innerHTML = '';

        exercises.forEach(exercise => {
            const btn = document.createElement('button');
            btn.className = 'state-btn';
            btn.innerHTML = `
                <span class="btn-label">${exercise.name}</span>
                <span class="btn-description">${exercise.duration}</span>
            `;
            btn.addEventListener('click', () => {
                this.startExercise(exercise);
            });
            container.appendChild(btn);
        });

        ScreenManager.show('screen-grounding-selection');
    },

    startExercise(exercise) {
        AppState.currentExercise = exercise;
        AppState.currentExerciseStep = 0;
        AppState.currentSession.groundingAccepted = true;
        AppState.currentSession.groundingExercise = exercise.name;

        document.getElementById('exerciseTitle').textContent = exercise.name;
        this.showExerciseStep();
        ScreenManager.show('screen-grounding-walkthrough');
    },

    showExerciseStep() {
        const exercise = AppState.currentExercise;
        const stepIndex = AppState.currentExerciseStep;
        const step = exercise.steps[stepIndex];

        document.getElementById('exerciseStep').textContent = step;

        // Start breathing animation if applicable
        BreathingAnimation.start(exercise.name, stepIndex);

        // Update progress dots
        const progressContainer = document.getElementById('exerciseProgress');
        progressContainer.innerHTML = '';

        exercise.steps.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            if (index === stepIndex) {
                dot.classList.add('active');
            }
            progressContainer.appendChild(dot);
        });

        // Update button text
        const btn = document.getElementById('exerciseNextBtn');
        if (stepIndex === exercise.steps.length - 1) {
            btn.textContent = 'Continue to next screen';
        } else {
            btn.textContent = 'Next';
        }
    },

    nextExerciseStep() {
        const exercise = AppState.currentExercise;
        AppState.currentExerciseStep++;

        if (AppState.currentExerciseStep >= exercise.steps.length) {
            // Exercise complete, stop any breathing animation
            BreathingAnimation.stop();
            ScreenManager.show('screen-thought');
        } else {
            this.showExerciseStep();
        }
    }
};

// ===================================
// Breathing Animation Manager
// ===================================
const BreathingAnimation = {
    animationInterval: null,
    progressInterval: null,
    currentPhase: null,
    totalDuration: 0,
    elapsedTime: 0,

    // Check if exercise is a breathing exercise
    isBreathingExercise(exerciseName) {
        const breathingExercises = ['Box Breathing', 'Body Scan Check-in'];
        return breathingExercises.includes(exerciseName);
    },

    // Start breathing animation for Box Breathing
    start(exerciseName, stepIndex) {
        // Always stop any existing animation first to prevent sync issues
        this.stop();

        // Only show animation for breathing exercises
        if (!this.isBreathingExercise(exerciseName)) {
            document.getElementById('breathingAnimation').style.display = 'none';
            return;
        }

        // Show animation container
        document.getElementById('breathingAnimation').style.display = 'flex';

        // Box Breathing specific animation (only on breathing steps)
        if (exerciseName === 'Box Breathing' && stepIndex >= 1 && stepIndex <= 6) {
            this.startBoxBreathing();
        } else if (exerciseName === 'Body Scan Check-in' && stepIndex >= 1) {
            this.startGentlePulse();
        } else {
            // Hide animation for non-breathing steps
            document.getElementById('breathingAnimation').style.display = 'none';
        }
    },

    // Box Breathing: 4-4-4-4 pattern
    startBoxBreathing() {
        const circle = document.getElementById('breathCircle');
        const text = document.getElementById('breathText');
        const instruction = document.getElementById('breathInstruction');
        const progressRing = document.getElementById('progressRing');

        // Reset circle to default state
        circle.classList.remove('inhale', 'hold', 'exhale', 'gentle-pulse');
        circle.setAttribute('r', '60');

        // Set up progress ring
        const radius = 90;
        const circumference = 2 * Math.PI * radius;
        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = circumference;
        progressRing.style.display = 'block';

        this.totalDuration = 16000; // 16 seconds total (4+4+4+4)
        this.elapsedTime = 0;

        // Animate progress ring
        this.progressInterval = setInterval(() => {
            this.elapsedTime += 100;
            const progress = this.elapsedTime / this.totalDuration;
            const offset = circumference - (progress * circumference);
            progressRing.style.strokeDashoffset = offset;

            if (this.elapsedTime >= this.totalDuration) {
                this.elapsedTime = 0; // Loop
            }
        }, 100);

        // Countdown helper function
        const countdown = (duration) => {
            let remaining = duration;
            instruction.textContent = `${remaining}`;

            const countdownInterval = setInterval(() => {
                remaining--;
                if (remaining > 0) {
                    instruction.textContent = `${remaining}`;
                } else {
                    clearInterval(countdownInterval);
                }
            }, 1000);

            return countdownInterval;
        };

        // Breathing cycle
        const breathCycle = () => {
            let countdownInterval;

            // Inhale (4 seconds)
            circle.classList.remove('exhale', 'hold');
            circle.classList.add('inhale');
            text.textContent = 'Breathe In';
            countdownInterval = countdown(4);

            setTimeout(() => {
                clearInterval(countdownInterval);

                // Hold (4 seconds)
                circle.classList.remove('inhale');
                circle.classList.add('hold');
                text.textContent = 'Hold';
                countdownInterval = countdown(4);

                setTimeout(() => {
                    clearInterval(countdownInterval);

                    // Exhale (4 seconds)
                    circle.classList.remove('hold');
                    circle.classList.add('exhale');
                    text.textContent = 'Breathe Out';
                    countdownInterval = countdown(4);

                    setTimeout(() => {
                        clearInterval(countdownInterval);

                        // Hold (4 seconds)
                        circle.classList.remove('exhale');
                        circle.classList.add('hold');
                        text.textContent = 'Hold';
                        countdownInterval = countdown(4);
                    }, 4000);
                }, 4000);
            }, 4000);
        };

        // Start first cycle immediately
        breathCycle();

        // Repeat every 16 seconds
        this.animationInterval = setInterval(breathCycle, 16000);
    },

    // Gentle pulse for Body Scan
    startGentlePulse() {
        const circle = document.getElementById('breathCircle');
        const text = document.getElementById('breathText');
        const instruction = document.getElementById('breathInstruction');
        const progressRing = document.getElementById('progressRing');

        // Reset and set gentle pulse
        circle.classList.remove('inhale', 'hold', 'exhale');
        circle.setAttribute('r', '60');
        circle.classList.add('gentle-pulse');
        text.textContent = 'Breathe';
        instruction.textContent = 'Notice your body';

        progressRing.style.display = 'none';
    },

    // Stop animation
    stop() {
        // Clear all intervals
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
            this.animationInterval = null;
        }

        if (this.progressInterval) {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
        }

        // Reset circle state
        const circle = document.getElementById('breathCircle');
        if (circle) {
            circle.classList.remove('inhale', 'hold', 'exhale', 'gentle-pulse');
            circle.setAttribute('r', '60');
        }

        // Reset progress ring
        const progressRing = document.getElementById('progressRing');
        if (progressRing) {
            progressRing.style.display = 'block';
            progressRing.style.strokeDashoffset = '0';
        }

        // Hide animation container
        const animationContainer = document.getElementById('breathingAnimation');
        if (animationContainer) {
            animationContainer.style.display = 'none';
        }
    }
};

// ===================================
// Resolution Manager
// ===================================
const ResolutionManager = {
    showResolutionOptions(state, control) {
        const options = control === 'Actionable'
            ? RESOLUTION_OPTIONS[state].actionable
            : RESOLUTION_OPTIONS[state].nonActionable;

        // Update title and subtitle
        if (control === 'Actionable') {
            document.getElementById('resolutionTitle').textContent = 'Which small step are you willing to take?';
            document.getElementById('resolutionSubtitle').textContent = 'Pick one. Just one.';
        } else {
            document.getElementById('resolutionTitle').textContent = 'What are you choosing to let go of, at least for today?';
            document.getElementById('resolutionSubtitle').textContent = 'You can pick it back up tomorrow if needed';
        }

        // Populate options
        const container = document.getElementById('resolutionOptions');
        container.innerHTML = '';

        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'resolution-choice-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => {
                this.selectResolution(option, 'predefined');
            });
            container.appendChild(btn);
        });

        // Add custom option
        const customBtn = document.createElement('button');
        customBtn.className = 'resolution-choice-btn custom';
        customBtn.textContent = 'Something else...';
        customBtn.addEventListener('click', () => {
            this.showCustomResolution();
        });
        container.appendChild(customBtn);

        ScreenManager.show('screen-resolution');
    },

    showCustomResolution() {
        document.getElementById('resolutionOptions').style.display = 'none';
        document.getElementById('customResolution').style.display = 'block';
        document.getElementById('resolutionInput').focus();
    },

    selectResolution(resolution, type) {
        AppState.currentSession.resolution = resolution;
        AppState.currentSession.resolutionType = type;
        this.showOutput();
    },

    showOutput() {
        const { state, control, resolution } = AppState.currentSession;

        // Generate summary
        const summary = generateSummary(state, control, resolution);
        document.getElementById('outputSummary').textContent = summary;

        // Show encouragement
        const encouragement = ENCOURAGEMENT[state];
        document.getElementById('outputEncouragement').textContent = encouragement;

        // Show random verse
        const verse = getRandomVerse();
        document.getElementById('verseText').textContent = `"${verse.text}"`;
        document.getElementById('verseReference').textContent = `— ${verse.reference}`;

        ScreenManager.show('screen-output');
    }
};

// ===================================
// Insights Calculator
// ===================================
const InsightsCalculator = {
    calculate() {
        const sessions = Storage.getSessions();

        if (sessions.length === 0) {
            return null;
        }

        // Most common state
        const stateCounts = {};
        sessions.forEach(s => {
            stateCounts[s.state] = (stateCounts[s.state] || 0) + 1;
        });
        const mostCommonState = Object.keys(stateCounts).reduce((a, b) =>
            stateCounts[a] > stateCounts[b] ? a : b
        );

        // Actionable vs Non-actionable ratio
        const actionableCount = sessions.filter(s => s.control === 'Actionable').length;
        const actionableRatio = Math.round((actionableCount / sessions.length) * 100);

        // Grounding exercise usage
        const groundingAcceptedCount = sessions.filter(s => s.groundingAccepted).length;
        const groundingRatio = sessions.filter(s => s.groundingOffered).length > 0
            ? Math.round((groundingAcceptedCount / sessions.filter(s => s.groundingOffered).length) * 100)
            : null;

        // Time of day trends
        const timeSlots = { morning: 0, afternoon: 0, evening: 0, night: 0 };
        sessions.forEach(s => {
            const hour = new Date(s.timestamp).getHours();
            if (hour >= 5 && hour < 12) timeSlots.morning++;
            else if (hour >= 12 && hour < 17) timeSlots.afternoon++;
            else if (hour >= 17 && hour < 21) timeSlots.evening++;
            else timeSlots.night++;
        });
        const mostCommonTime = Object.keys(timeSlots).reduce((a, b) =>
            timeSlots[a] > timeSlots[b] ? a : b
        );

        // Helpful ratio
        const helpfulSessions = sessions.filter(s => s.helpful === true).length;
        const helpfulRatio = sessions.filter(s => s.helpful !== null).length > 0
            ? Math.round((helpfulSessions / sessions.filter(s => s.helpful !== null).length) * 100)
            : null;

        return {
            totalSessions: sessions.length,
            mostCommonState,
            actionableRatio,
            groundingRatio,
            mostCommonTime,
            helpfulRatio
        };
    },

    render() {
        const container = document.getElementById('insightsContainer');
        const insights = this.calculate();

        if (!insights) {
            container.innerHTML = '<div class="empty-state">Complete a session to see your patterns</div>';
            return;
        }

        container.innerHTML = `
            <div class="insight-card">
                <div class="insight-title">Total Sessions</div>
                <div class="insight-value">${insights.totalSessions}</div>
            </div>
            
            <div class="insight-card">
                <div class="insight-title">Most Common State</div>
                <div class="insight-value">${insights.mostCommonState}</div>
            </div>
            
            <div class="insight-card">
                <div class="insight-title">Actionable Situations</div>
                <div class="insight-value">${insights.actionableRatio}%</div>
                <div class="insight-detail">of situations had a clear action</div>
            </div>
            
            ${insights.groundingRatio !== null ? `
                <div class="insight-card">
                    <div class="insight-title">Grounding Exercise Usage</div>
                    <div class="insight-value">${insights.groundingRatio}%</div>
                    <div class="insight-detail">tried grounding exercises when offered</div>
                </div>
            ` : ''}
            
            <div class="insight-card">
                <div class="insight-title">Most Active Time</div>
                <div class="insight-value">${insights.mostCommonTime.charAt(0).toUpperCase() + insights.mostCommonTime.slice(1)}</div>
            </div>
            
            ${insights.helpfulRatio !== null ? `
                <div class="insight-card">
                    <div class="insight-title">Helpful Sessions</div>
                    <div class="insight-value">${insights.helpfulRatio}%</div>
                    <div class="insight-detail">found sessions helpful</div>
                </div>
            ` : ''}
        `;
    }
};

// ===================================
// Event Handlers
// ===================================

// Screen 1: State Selection
document.querySelectorAll('.state-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Check if user can start a session
        if (!Storage.canStartSession()) {
            ScreenManager.show('screen-limit');
            return;
        }

        AppState.currentSession.state = btn.dataset.state;
        ExerciseManager.showGroundingOffer(btn.dataset.state);
    });
});

// Screen 2: Grounding Exercise Offer
document.getElementById('groundingYesBtn').addEventListener('click', () => {
    ExerciseManager.showExerciseSelection(AppState.currentSession.state);
});

document.getElementById('groundingSkipBtn').addEventListener('click', () => {
    AppState.currentSession.groundingAccepted = false;
    ScreenManager.show('screen-thought');
});

// Screen 4: Exercise Walkthrough
document.getElementById('exerciseNextBtn').addEventListener('click', () => {
    ExerciseManager.nextExerciseStep();
});

// Screen 5: Thought Input
document.getElementById('thoughtNextBtn').addEventListener('click', () => {
    const thought = document.getElementById('thoughtInput').value.trim();

    // Check for distress keywords
    if (containsDistressKeywords(thought)) {
        ScreenManager.show('screen-boundary');
        return;
    }

    AppState.currentSession.thought = thought;
    ScreenManager.show('screen-control');
});

// Screen 6: Control Question
document.querySelectorAll('.control-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        AppState.currentSession.control = btn.dataset.control;
        ResolutionManager.showResolutionOptions(
            AppState.currentSession.state,
            btn.dataset.control
        );
    });
});

// Screen 7: Resolution - Custom Input
document.getElementById('resolutionNextBtn').addEventListener('click', () => {
    const resolution = document.getElementById('resolutionInput').value.trim();

    if (!resolution) {
        alert('Please enter a response');
        return;
    }

    ResolutionManager.selectResolution(resolution, 'custom');
});

// Screen 8: Feedback buttons
document.querySelectorAll('.feedback-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const helpful = btn.dataset.helpful === 'true';
        AppState.currentSession.helpful = helpful;

        // Visual feedback
        document.querySelectorAll('.feedback-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    });
});

// Screen 8: Complete Session
document.getElementById('completeBtn').addEventListener('click', () => {
    // Save session metadata
    Storage.saveSession(AppState.currentSession);
    Storage.incrementSessionCount();

    // Check if should show feedback prompt
    if (Storage.shouldShowFeedbackPrompt()) {
        Storage.markFeedbackPromptShown();
        ScreenManager.show('screen-feedback');
    } else {
        // Clear inputs and return home
        document.getElementById('thoughtInput').value = '';
        document.getElementById('resolutionInput').value = '';
        document.getElementById('resolutionOptions').style.display = 'flex';
        document.getElementById('customResolution').style.display = 'none';
        document.querySelectorAll('.feedback-btn').forEach(b => b.classList.remove('selected'));
        ScreenManager.showHome();
    }
});

// Boundary Screen
document.getElementById('boundaryOkBtn').addEventListener('click', () => {
    ScreenManager.showHome();
});

// History Button
document.getElementById('historyBtn').addEventListener('click', () => {
    InsightsCalculator.render();

    // Show premium prompt for free users
    const settings = Storage.getSettings();
    const premiumPrompt = document.getElementById('premiumPrompt');
    if (settings.tier === 'free') {
        premiumPrompt.style.display = 'block';
    } else {
        premiumPrompt.style.display = 'none';
    }

    ScreenManager.show('screen-history');
});

// Back to Home
document.getElementById('backToHomeBtn').addEventListener('click', () => {
    ScreenManager.showHome();
});

// Limit Screen - Upgrade Button
document.getElementById('upgradeLimitBtn').addEventListener('click', () => {
    ScreenManager.show('screen-premium');
});

// Limit Screen - View History
document.getElementById('viewHistoryBtn').addEventListener('click', () => {
    InsightsCalculator.render();
    ScreenManager.show('screen-history');
});

// Premium Screen - Upgrade Button
document.getElementById('upgradeBtn').addEventListener('click', () => {
    ScreenManager.show('screen-premium');
});

// Premium Screen - Unlock Premium
document.getElementById('unlockPremiumBtn').addEventListener('click', () => {
    Storage.unlockPremium();
    alert('Premium unlocked! You now have unlimited access.');
    ScreenManager.showHome();
});

// Premium Screen - Cancel
document.getElementById('cancelPremiumBtn').addEventListener('click', () => {
    ScreenManager.showHome();
});

// Feedback Screen - Send Feedback
document.getElementById('sendFeedbackBtn').addEventListener('click', () => {
    const feedback = document.getElementById('feedbackInput').value.trim();

    if (feedback) {
        const subject = encodeURIComponent('Mental Reset Feedback');
        const body = encodeURIComponent(feedback);
        window.location.href = `mailto:eng.sibalwalushomo@gmail.com?subject=${subject}&body=${body}`;
    }

    document.getElementById('feedbackInput').value = '';
    ScreenManager.showHome();
});

// Feedback Screen - Skip
document.getElementById('skipFeedbackBtn').addEventListener('click', () => {
    document.getElementById('feedbackInput').value = '';
    ScreenManager.showHome();
});

// ===================================
// Initialize App
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    ScreenManager.showHome();
});
