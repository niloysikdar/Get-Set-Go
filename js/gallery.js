const stateDesc = [
    {
        stateImage: "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        stateName: "Kerala",
        stateDescription: "Flanked by the Arabian Sea in the West, the towering Western Ghats in the East,Kerala is blessed with a unique set of geographical features that have made it one of the most sought after tourist destinations in Asia",
        stateInfo: "https://en.wikipedia.org/wiki/Kerala",
    },
    {
        stateImage: "https://images.unsplash.com/photo-1575392884524-304bbe4af54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2VzdCUyMGJlbmdhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        stateName: "West Bengal",
        stateDescription: "Bordered by five different states, its capital Kolkata is often termed as the cultural capital of India. West Bengal offers a unique flavour to the richness of India with its synthesis of various languages, religions, customs, traditions and lifestyle",
        stateInfo: "https://en.wikipedia.org/wiki/Westbengal",
    },
    {
        stateImage: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXR0YXJha2hhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        stateName: "Uttarakhand",
        stateDescription: "Uttarakhand is a state in the northern part of India. It is often referred to as the 'Devbhumi' due to its religious significance and numerous Hindu temples and pilgrimage centres found throughout the state.",
        stateInfo: "https://en.wikipedia.org/wiki/uttarakhand",
    },
    {
        stateImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWElMjBnYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        stateName: "Delhi",
        stateDescription: "The Indian capital has a long history, and it is believed that atleast seven cities were established in this area over the centuries. Now a sprawling city, it is home to countless diverse localities, each with their unique culture and architecture",
        stateInfo: "https://en.wikipedia.org/wiki/Delhi",
    },
    {
        stateImage: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFkaHlhJTIwcHJhZGVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        stateName: "Madhya Pradesh",
        stateDescription: "Madhya Pradesh is situated in the central region of India and that's why it is called the Heartland State. It has the largest reserves of diamond and copper in India as Madhya Pradesh is rich in mineral resources",
        stateInfo: "https://en.wikipedia.org/wiki/madhyapradesh",
    },
    {
        stateImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFtaWxuYWR1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        stateName: "Tamilnadu",
        stateDescription: "Tamilnadu is full of surprises! itself the beautiful beaches, the magnificent temples, picturesque wildlife sanctuaries, colourful festivals and a plethora of panoramic sites make Tamil Nadu tourism an enthralling experience",
        stateInfo: "https://en.wikipedia.org/wiki/tamilnadu",
    },
    {
        stateImage: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MTAyNTI3MzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        stateName: "Rajashtan",
        stateDescription: "Rajasthan is famous for its forts, intricately carved temples, and decorated 'havelis', which were built by 'Rajput' kings. Rajasthan attracts about 14 percent of total foreign visitors",
        stateInfo: "https://en.wikipedia.org/wiki/Rajashtan",
    },
    {
        stateImage: "https://images.unsplash.com/photo-1603132871300-4bdf8971227f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwyMTcxOTQzNXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        stateName: "Himachal Pradesh",
        stateDescription: "Himachal Pradesh is one of the states that lies in the Indian Himalayan Region (IHR), one of the richest reservoirs of biological diversity in the world",
        stateInfo: "https://en.wikipedia.org/wiki/Himachalpradesh",
    },

]

const imageBlock = document.getElementById('center');
const searchBar = document.getElementById("search");
searchBar.addEventListener('keyup', (input_value) => {
    const inputValue = input_value.target.value.toLowerCase();
    const findState = stateDesc.filter((desc) => {
        return desc.stateName.toLowerCase().includes(inputValue);
    });
    showStates(findState);
})
const getState = () => {
    try {
        showStates(stateDesc);
    } catch (error) {
        console.error(error);
    }
};

const showStates = (statesDescription) => {
    const cardInnerContent = statesDescription
        .map((descrip) => {
            return `
        <div class="stateBlock" >
        <img src="${descrip.stateImage}" />
        <h4 class="state_name">${descrip.stateName}</h4>
            <div class="description">
            <h4>${descrip.stateName}</h4>
            <p>${descrip.stateDescription}</p>
            <a href="${descrip.stateInfo}" target="_blank">Explore more</a>
            </div>
            </div>
            `;
        })
        .join('');
    imageBlock.innerHTML = cardInnerContent;
    const stateCard = imageBlock.querySelectorAll('.stateBlock');
    for (let i = 0; i < stateCard.length; i++) {
        stateCard[i].addEventListener('mouseover', () => {
            const image = stateCard[i].querySelector('img');
            const stateTitle = stateCard[i].querySelector('.state_name');
            const description = stateCard[i].querySelector('.description');
            stateCard[i].style.transition="display .3s";
            image.style.display = "none";
            stateTitle.style.display="none";
            stateCard[i].style.height = "336.797px";
            description.style.display = "block";
            description.style.margin="5px";
    
        })
        stateCard[i].addEventListener('mouseout', () => {
            const image = stateCard[i].querySelector('img');
            const stateTitle = stateCard[i].querySelector('.state_name')
            const description = stateCard[i].querySelector('.description');
            stateCard[i].style.transition="display .3s";
            description.style.display = "none";
            stateCard[i].style.height="336.797px";
            stateTitle.style.display="block";
            stateCard[i].style.transitionDelay= "34s";
            image.style.transitionDelay= "34s";
            image.style.display = "block";

    
        })
    }
};

getState();
