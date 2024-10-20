@Service
public class TicketService {
    private final List<String> ticketPool = Collections.synchronizedList(new ArrayList<>());
    private final ReentrantLock lock = new ReentrantLock();

    public void createTickets(int total, int rate) {
        // Logic for adding tickets concurrently by vendor threads
        lock.lock();
        try {
            for (int i = 0; i < total; i++) {
                ticketPool.add("Ticket-" + i);
            }
        } finally {
            lock.unlock();
        }
    }

    public int getAvailableTickets() {
        return ticketPool.size();
    }
}
