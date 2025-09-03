    // Sample event data
        const eventsData = [
            {
                id: 1,
                title: "Electronic Music Festival 2025",
                date: "March 15, 2025",
                location: "Phoenix Mills, Mumbai",
                description: "Experience the best electronic music artists from around the world in this spectacular outdoor festival.",
                price: "₹2,500",
                category: "music",
                city: "mumbai",
                attendees: 1250,
                image: "music"
            },
            {
                id: 2,
                title: "AI & Machine Learning Summit",
                date: "March 22, 2025",
                location: "India Habitat Centre, Delhi",
                description: "Join industry leaders and researchers discussing the future of AI and machine learning technologies.",
                price: "₹1,800",
                category: "tech",
                city: "delhi",
                attendees: 850,
                image: "tech"
            },
            {
                id: 3,
                title: "Contemporary Art Showcase",
                date: "March 18, 2025",
                location: "National Gallery, Bangalore",
                description: "Discover emerging artists and their innovative works in digital and traditional mediums.",
                price: "₹500",
                category: "art",
                city: "bangalore",
                attendees: 320,
                image: "art"
            },
            {
                id: 4,
                title: "Street Food Festival",
                date: "March 25, 2025",
                location: "Tank Bund, Hyderabad",
                description: "Taste authentic street food from different regions of India and international cuisines.",
                price: "₹300",
                category: "food",
                city: "hyderabad",
                attendees: 2100,
                image: "food"
            },
            {
                id: 5,
                title: "Cricket Championship Finals",
                date: "March 30, 2025",
                location: "M.A. Chidambaram Stadium, Chennai",
                description: "Watch the most exciting cricket matches as teams compete for the championship title.",
                price: "₹1,200",
                category: "sports",
                city: "chennai",
                attendees: 45000,
                image: "sports"
            },
            {
                id: 6,
                title: "Startup Pitch Competition",
                date: "April 5, 2025",
                location: "KTPO, Bangalore",
                description: "Watch innovative startups pitch their ideas to investors and industry experts.",
                price: "Free",
                category: "tech",
                city: "bangalore",
                attendees: 500,
                image: "tech"
            }
        ];

        let currentEvents = [...eventsData];

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            renderEvents(currentEvents);
            initializeHeader();
        });

        // Header scroll effect
        function initializeHeader() {
            window.addEventListener('scroll', function() {
                const header = document.querySelector('.header');
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(15, 23, 42, 0.95)';
                    header.style.borderBottom = '1px solid rgba(99, 102, 241, 0.3)';
                } else {
                    header.style.background = 'rgba(30, 41, 59, 0.7)';
                    header.style.borderBottom = '1px solid #334155';
                }
            });
        }

        // Render events
        function renderEvents(events) {
            const eventsGrid = document.getElementById('eventsGrid');
            
            if (events.length === 0) {
                eventsGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                        <h3>No events found</h3>
                        <p>Try adjusting your search criteria or explore different categories.</p>
                    </div>
                `;
                return;
            }

            eventsGrid.innerHTML = events.map(event => `
                <div class="event-card" onclick="showEventDetails(${event.id})">
                    <div class="event-image"></div>
                    <div class="event-content">
                        <div class="event-date">${event.date}</div>
                        <h3 class="event-title">${event.title}</h3>
                        <div class="event-location">
                            📍 ${event.location}
                        </div>
                        <p class="event-description">${event.description}</p>
                        <div class="event-footer">
                            <div class="event-price">${event.price}</div>
                            <div class="event-attendees">
                                👥 ${event.attendees.toLocaleString()} attending
                                <div class="attendee-avatars">
                                    <div class="avatar"></div>
                                    <div class="avatar"></div>
                                    <div class="avatar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Search events
        function searchEvents(event) {
            event.preventDefault();
            showLoading();
            
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const location = document.getElementById('locationSelect').value.toLowerCase();
            
            setTimeout(() => {
                let filteredEvents = eventsData.filter(event => {
                    const matchesSearch = !searchTerm || 
                        event.title.toLowerCase().includes(searchTerm) ||
                        event.description.toLowerCase().includes(searchTerm) ||
                        event.category.toLowerCase().includes(searchTerm);
                    
                    const matchesLocation = !location || event.city === location;
                    
                    return matchesSearch && matchesLocation;
                });

                currentEvents = filteredEvents;
                renderEvents(currentEvents);
                hideLoading();
            }, 800);
        }

        // Filter by category
        function filterByCategory(category) {
            // Update active filter tag
            document.querySelectorAll('.filter-tag').forEach(tag => {
                tag.classList.remove('active');
            });
            event.target.classList.add('active');

            showLoading();
            
            setTimeout(() => {
                if (category === 'all') {
                    currentEvents = [...eventsData];
                } else {
                    currentEvents = eventsData.filter(event => event.category === category);
                }
                renderEvents(currentEvents);
                hideLoading();
            }, 500);
        }

        // Show loading
        function showLoading() {
            document.getElementById('loading').style.display = 'block';
            document.getElementById('eventsGrid').style.opacity = '0.3';
        }

        // Hide loading
        function hideLoading() {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('eventsGrid').style.opacity = '1';
        }

        // Show event details (placeholder)
        function showEventDetails(eventId) {
            const event = eventsData.find(e => e.id === eventId);
            alert(`Event Details:\n\n${event.title}\n${event.date}\n${event.location}\n\n${event.description}\n\nPrice: ${event.price}\nAttendees: ${event.attendees}`);
        }

        // Scroll to events section
        function scrollToEvents() {
            document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
        }

        // Show create event (placeholder)
        function showCreateEvent() {
            alert('Create Event feature coming soon! 🚀\n\nThis will allow you to create and manage your own events.');
        }

        // Add some interactive hover effects
        document.addEventListener('mousemove', function(e) {
            const cards = document.querySelectorAll('.event-card, .preview-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                } else {
                    card.style.transform = '';
                }
            });
        });