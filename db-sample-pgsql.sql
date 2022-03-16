--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-03-16 23:03:36

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 831 (class 1247 OID 16414)
-- Name: role_katsir; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.role_katsir AS ENUM (
    'admin',
    'cashier'
);


ALTER TYPE public.role_katsir OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16441)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(100) DEFAULT ''::character varying NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp without time zone
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16440)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO postgres;

--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 213
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- TOC entry 216 (class 1259 OID 16450)
-- Name: order_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_detail (
    id integer NOT NULL,
    user_id smallint NOT NULL,
    total integer NOT NULL,
    tax integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.order_detail OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16449)
-- Name: order_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_detail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_detail_id_seq OWNER TO postgres;

--
-- TOC entry 3367 (class 0 OID 0)
-- Dependencies: 215
-- Name: order_detail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_detail_id_seq OWNED BY public.order_detail.id;


--
-- TOC entry 218 (class 1259 OID 16458)
-- Name: order_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_item (
    id integer NOT NULL,
    order_id smallint NOT NULL,
    user_id smallint NOT NULL,
    product_id smallint NOT NULL,
    quantity smallint NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.order_item OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16457)
-- Name: order_item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_item_id_seq OWNER TO postgres;

--
-- TOC entry 3368 (class 0 OID 0)
-- Dependencies: 217
-- Name: order_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_item_id_seq OWNED BY public.order_item.id;


--
-- TOC entry 212 (class 1259 OID 16430)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(100) DEFAULT ''::character varying NOT NULL,
    price integer NOT NULL,
    image character varying NOT NULL,
    category_id smallint NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp without time zone
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16429)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO postgres;

--
-- TOC entry 3369 (class 0 OID 0)
-- Dependencies: 211
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- TOC entry 210 (class 1259 OID 16420)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(100) DEFAULT ''::character varying NOT NULL,
    password character varying(255) DEFAULT ''::character varying NOT NULL,
    role public.role_katsir NOT NULL,
    username character varying(50) DEFAULT ''::character varying NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp without time zone
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16419)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 3370 (class 0 OID 0)
-- Dependencies: 209
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 3195 (class 2604 OID 16444)
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- TOC entry 3198 (class 2604 OID 16453)
-- Name: order_detail id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_detail ALTER COLUMN id SET DEFAULT nextval('public.order_detail_id_seq'::regclass);


--
-- TOC entry 3200 (class 2604 OID 16461)
-- Name: order_item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_item ALTER COLUMN id SET DEFAULT nextval('public.order_item_id_seq'::regclass);


--
-- TOC entry 3192 (class 2604 OID 16433)
-- Name: product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- TOC entry 3187 (class 2604 OID 16423)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3356 (class 0 OID 16441)
-- Dependencies: 214
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.category (id, name, created_at, updated_at) VALUES (1, 'Coffee', '2022-03-16 03:49:52.618', NULL);
INSERT INTO public.category (id, name, created_at, updated_at) VALUES (2, 'Non Coffee', '2022-03-16 03:50:36.891', NULL);
INSERT INTO public.category (id, name, created_at, updated_at) VALUES (3, 'Food', '2022-03-16 03:54:49.416', NULL);
INSERT INTO public.category (id, name, created_at, updated_at) VALUES (4, 'Dessert', '2022-03-16 22:28:43.051', NULL);
INSERT INTO public.category (id, name, created_at, updated_at) VALUES (5, 'Add-on', '2022-03-16 22:28:54.958', NULL);


--
-- TOC entry 3358 (class 0 OID 16450)
-- Dependencies: 216
-- Data for Name: order_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3360 (class 0 OID 16458)
-- Dependencies: 218
-- Data for Name: order_item; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3354 (class 0 OID 16430)
-- Dependencies: 212
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product (id, name, price, image, category_id, created_at, updated_at) VALUES (3, 'Wiener Schnitzel', 69000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-12.00.33-1625115633345-Wiener_Schnitzel.jpg', 3, '2022-03-16 22:21:31.514', NULL);
INSERT INTO public.product (id, name, price, image, category_id, created_at, updated_at) VALUES (4, 'Salmon Truffle Teriyaki', 60000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-12.00.07-1625115607835-Salmon_Truffle_Teriyaki.jpg', 3, '2022-03-16 22:22:02.243', NULL);
INSERT INTO public.product (id, name, price, image, category_id, created_at, updated_at) VALUES (5, 'Chicken Katsu Dabu-dabu', 60000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.59.41-1625115581830-Chicken_Katsu_Dabu-dabu.jpg', 3, '2022-03-16 22:22:29.614', NULL);
INSERT INTO public.product (id, name, price, image, category_id, created_at, updated_at) VALUES (6, 'Black Forest', 30000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.58.48-1625115528860-Black_Forest.jpg', 4, '2022-03-16 22:23:58.652', NULL);
INSERT INTO public.product (id, name, price, image, category_id, created_at, updated_at) VALUES (7, 'Choco Rhum', 28000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.57.24-1625115444010-Choco_Rhum.jpg', 4, '2022-03-16 22:24:23.189', NULL);
INSERT INTO public.product (id, name, price, image, category_id, created_at, updated_at) VALUES (8, 'Red Velvet Latte', 33000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.56.45-1625115405891-Red_Velvet_Latte.jpg', 1, '2022-03-16 22:25:16.263', NULL);
INSERT INTO public.product (id, name, price, image, category_id, created_at, updated_at) VALUES (9, 'Cappucino', 5000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.56.18-1625115378523-Cappucino.jpg', 1, '2022-03-16 22:25:57.371', NULL);
INSERT INTO public.product (id, name, price, image, category_id, created_at, updated_at) VALUES (10, 'Coffee Latte', 15000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.55.59-1625115359204-Cofee_Latte.jpg', 1, '2022-03-16 22:26:25.832', NULL);
INSERT INTO public.product (id, name, price, image, category_id, created_at, updated_at) VALUES (11, 'Espresso', 10000, 'http://localhost:3939/uploads/Mon_Aug_16_2021-23.22.16-1629130937376-Espresso.jpg', 1, '2022-03-16 22:26:58.448', NULL);


--
-- TOC entry 3352 (class 0 OID 16420)
-- Dependencies: 210
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."user" (id, email, password, role, username, created_at, updated_at) VALUES (1, 'fiamma@gmail.com', '$2a$10$MmYp7UwvpGaTjE5LjEO2FeiM17jEKu2Rn1VFKGel9p.QcavIWqaPK', 'admin', 'Fiamma', '2022-03-16 02:14:55.343', NULL);
INSERT INTO public."user" (id, email, password, role, username, created_at, updated_at) VALUES (2, 'daiya@gmail.com', '$2a$10$vAD3jAoVGQB9vrWaxixHLO1O1jJJewMdBudQQtlzM7t7YQ4e672ZW', 'cashier', 'Daiya Irma', '2022-03-16 22:39:56.056', NULL);


--
-- TOC entry 3371 (class 0 OID 0)
-- Dependencies: 213
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 5, true);


--
-- TOC entry 3372 (class 0 OID 0)
-- Dependencies: 215
-- Name: order_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_detail_id_seq', 1, false);


--
-- TOC entry 3373 (class 0 OID 0)
-- Dependencies: 217
-- Name: order_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_item_id_seq', 1, false);


--
-- TOC entry 3374 (class 0 OID 0)
-- Dependencies: 211
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 11, true);


--
-- TOC entry 3375 (class 0 OID 0)
-- Dependencies: 209
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 2, true);


--
-- TOC entry 3207 (class 2606 OID 16448)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 3209 (class 2606 OID 16456)
-- Name: order_detail order_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT order_detail_pkey PRIMARY KEY (id);


--
-- TOC entry 3211 (class 2606 OID 16464)
-- Name: order_item order_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_pkey PRIMARY KEY (id);


--
-- TOC entry 3205 (class 2606 OID 16439)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- TOC entry 3203 (class 2606 OID 16428)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


-- Completed on 2022-03-16 23:03:37

--
-- PostgreSQL database dump complete
--

