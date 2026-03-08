import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            cart: [],
            setUser: (user) => set({ user }),
            setToken: (token) => set({ token }),
            addToCart: (product) => set((state) => {
                const existing = state.cart.find(item => item.id === product.id);
                if (existing) {
                    return { cart: state.cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) };
                }
                return { cart: [...state.cart, { ...product, quantity: 1 }] };
            }),
            removeFromCart: (productId) => set((state) => ({
                cart: state.cart.filter(item => item.id !== productId)
            })),
            clearCart: () => set({ cart: [] })
        }),
        {
            name: 'watchhub-storage', // unique name
        }
    )
);

export default useStore;
